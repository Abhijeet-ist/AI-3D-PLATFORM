"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Bell, Shield, CreditCard, Palette, Save, Upload, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const [userSettings, setUserSettings] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    website: "",
    location: "",
    avatar: "",
    notifications: {
      email: true,
      push: false,
      marketing: false,
      updates: true,
    },
    privacy: {
      profilePublic: true,
      showEmail: false,
      showLocation: false,
    },
    preferences: {
      theme: "dark",
      language: "en",
      timezone: "UTC",
      defaultFormat: "glb",
    },
  })

  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Load user data from localStorage
    const email = localStorage.getItem("userEmail") || ""
    const name = localStorage.getItem("userName") || ""
    const [firstName, lastName] = name.split(" ")

    setUserSettings((prev) => ({
      ...prev,
      firstName: firstName || "",
      lastName: lastName || "",
      email,
    }))
  }, [])

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem("userName", `${userSettings.firstName} ${userSettings.lastName}`)
      toast({
        title: "Settings saved",
        description: "Your settings have been updated successfully.",
      })
      setIsLoading(false)
    }, 1000)
  }

  const handleInputChange = (field: string, value: any) => {
    setUserSettings((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNestedChange = (section: string, field: string, value: any) => {
    setUserSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
          <p className="text-slate-400">Manage your account settings and preferences</p>
        </motion.div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-slate-900/50 border border-slate-700">
            <TabsTrigger value="profile" className="data-[state=active]:bg-purple-600">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-purple-600">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-purple-600">
              <Shield className="w-4 h-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-purple-600">
              <CreditCard className="w-4 h-4 mr-2" />
              Billing
            </TabsTrigger>
            <TabsTrigger value="preferences" className="data-[state=active]:bg-purple-600">
              <Palette className="w-4 h-4 mr-2" />
              Preferences
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avatar Section */}
                  <div className="flex items-center space-x-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={userSettings.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-purple-600 text-white text-2xl">
                        {userSettings.firstName.charAt(0)}
                        {userSettings.lastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" className="border-slate-600 text-slate-300">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Photo
                      </Button>
                      <Button variant="ghost" className="text-red-400 hover:text-red-300">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>

                  <Separator className="bg-slate-700" />

                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-300">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        value={userSettings.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-300">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        value={userSettings.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={userSettings.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-slate-800 border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-slate-300">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      value={userSettings.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      className="bg-slate-800 border-slate-600 text-white"
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-slate-300">
                        Website
                      </Label>
                      <Input
                        id="website"
                        placeholder="https://yourwebsite.com"
                        value={userSettings.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-slate-300">
                        Location
                      </Label>
                      <Input
                        id="location"
                        placeholder="City, Country"
                        value={userSettings.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Email Notifications</Label>
                      <p className="text-sm text-slate-400">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={userSettings.notifications.email}
                      onCheckedChange={(checked) => handleNestedChange("notifications", "email", checked)}
                    />
                  </div>

                  <Separator className="bg-slate-700" />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Push Notifications</Label>
                      <p className="text-sm text-slate-400">Receive push notifications in your browser</p>
                    </div>
                    <Switch
                      checked={userSettings.notifications.push}
                      onCheckedChange={(checked) => handleNestedChange("notifications", "push", checked)}
                    />
                  </div>

                  <Separator className="bg-slate-700" />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Marketing Emails</Label>
                      <p className="text-sm text-slate-400">Receive updates about new features and promotions</p>
                    </div>
                    <Switch
                      checked={userSettings.notifications.marketing}
                      onCheckedChange={(checked) => handleNestedChange("notifications", "marketing", checked)}
                    />
                  </div>

                  <Separator className="bg-slate-700" />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Product Updates</Label>
                      <p className="text-sm text-slate-400">Get notified about important product updates</p>
                    </div>
                    <Switch
                      checked={userSettings.notifications.updates}
                      onCheckedChange={(checked) => handleNestedChange("notifications", "updates", checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Privacy Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Public Profile</Label>
                      <p className="text-sm text-slate-400">Make your profile visible to other users</p>
                    </div>
                    <Switch
                      checked={userSettings.privacy.profilePublic}
                      onCheckedChange={(checked) => handleNestedChange("privacy", "profilePublic", checked)}
                    />
                  </div>

                  <Separator className="bg-slate-700" />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Show Email</Label>
                      <p className="text-sm text-slate-400">Display your email address on your profile</p>
                    </div>
                    <Switch
                      checked={userSettings.privacy.showEmail}
                      onCheckedChange={(checked) => handleNestedChange("privacy", "showEmail", checked)}
                    />
                  </div>

                  <Separator className="bg-slate-700" />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Show Location</Label>
                      <p className="text-sm text-slate-400">Display your location on your profile</p>
                    </div>
                    <Switch
                      checked={userSettings.privacy.showLocation}
                      onCheckedChange={(checked) => handleNestedChange("privacy", "showLocation", checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Billing & Subscription</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                    <div>
                      <h3 className="text-white font-semibold">Current Plan</h3>
                      <p className="text-slate-400">Free Plan</p>
                    </div>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-semibold">Upgrade Options</h4>
                    <div className="grid gap-4">
                      <div className="p-4 border border-slate-700 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="text-white font-medium">Pro Plan</h5>
                          <span className="text-purple-400 font-bold">$19/month</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-3">
                          Unlimited generations, priority processing, advanced features
                        </p>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0">
                          Upgrade to Pro
                        </Button>
                      </div>

                      <div className="p-4 border border-slate-700 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="text-white font-medium">Enterprise</h5>
                          <span className="text-purple-400 font-bold">Custom</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-3">Custom solutions for teams and organizations</p>
                        <Button variant="outline" className="w-full border-slate-600 text-slate-300">
                          Contact Sales
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">App Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-slate-300">Theme</Label>
                      <Select
                        value={userSettings.preferences.theme}
                        onValueChange={(value) => handleNestedChange("preferences", "theme", value)}
                      >
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Language</Label>
                      <Select
                        value={userSettings.preferences.language}
                        onValueChange={(value) => handleNestedChange("preferences", "language", value)}
                      >
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Timezone</Label>
                      <Select
                        value={userSettings.preferences.timezone}
                        onValueChange={(value) => handleNestedChange("preferences", "timezone", value)}
                      >
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem value="UTC">UTC</SelectItem>
                          <SelectItem value="EST">Eastern Time</SelectItem>
                          <SelectItem value="PST">Pacific Time</SelectItem>
                          <SelectItem value="GMT">GMT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Default Export Format</Label>
                      <Select
                        value={userSettings.preferences.defaultFormat}
                        onValueChange={(value) => handleNestedChange("preferences", "defaultFormat", value)}
                      >
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem value="glb">GLB</SelectItem>
                          <SelectItem value="obj">OBJ</SelectItem>
                          <SelectItem value="fbx">FBX</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Save Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-end"
          >
            <Button
              onClick={handleSave}
              disabled={isLoading}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </motion.div>
        </Tabs>
      </div>
    </div>
  )
}
