import { SocialLinks } from "./SocialLinks"

export default function Footer() {
    return (
        <footer>
            <div className="pt-12 pb-6 mx-auto max-w-4xl text-center">
                <p className="text-gray-400">All rights reserved &copy; 2024 Cormac McCann</p>
            </div>
            <div className="grid justify-items-center pb-12">
            <SocialLinks />
            </div>
        </footer>
    )
}