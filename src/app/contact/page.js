import ContactForm from "@/components/ContactForm"

export const metadata = {
    title: 'Contact me | Cormac McCann',
    description: '...',
  }

export default function ContactPage() {
    return (
        <main className="grid items-center h-full p-12 max-w-4xl my-0 mx-auto">
            <h1 className="text-2xl lg:text-4xl pb-6 uppercase font-bold">Contact</h1>

            <h2 className="text-2xl uppercase pb-8 font-bold">If you&apos;re a recruiter</h2>
            <p className="pb-3">
                The best place to reach out with regards to hiring me would be <a href="#" rel="nofollow"><u>LinkedIn</u></a>
            </p>

            <h2 className="text-2xl uppercase pb-8 font-bold">If you just want to say hi</h2>
            <ContactForm />
        </main>
    )
}