import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const description =
    "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export function ContactForm() {
    return (
        <Card className="mx-auto max-w-lg shadow-2xl min-w-[80vw] md:min-w-[40vw] rounded-2xl">
            <CardHeader>
                <CardTitle className="text-3xl">Get In Touch</CardTitle>
                <CardDescription>
                    You can reach us anytime
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2 grid-cols-2">
                        <div>
                            {/* <Label htmlFor="text">First Name</Label> */}
                            <Input
                                className="h-10  rounded-xl"
                                id="firstname"
                                type="text"
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div>
                            {/* <Label htmlFor="text">Last Name</Label> */}
                            <Input
                                className="h-10  rounded-xl"
                                id="lastname"
                                type="text"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        {/* <Label htmlFor="email">Email</Label> */}
                        <Input
                            className="h-10  rounded-xl"
                            id="lastname"
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        {/* <Label htmlFor="text">Phone</Label> */}
                        <Input
                            className="h-10  rounded-xl"
                            id="phone"
                            type="tel"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div>
                        {/* <Label htmlFor="textarea">Message</Label> */}
                        <Textarea
                            id="message"
                            className="  rounded-xl "
                            placeholder="How can we help you?"
                            rows={4}
                            required
                        />
                    </div>
                    <Button size={"lg"} type="submit" className="w-full rounded-xl">
                        Submit
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
