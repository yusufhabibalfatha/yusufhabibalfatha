import { TfiEmail } from 'react-icons/tfi'

const Message = () => {
    return (
        <div className="border-t-[1px] border-black px-6 py-32">
            <p>
                <b>Send me</b> a short message or grab my email
                y.habib.alfatha@gmail.com
            </p>
            <form
                action="https://formspree.io/f/xoqodroe"
                method="post"
                className="mt-16 flex flex-col items-center gap-6"
            >
                <input
                    type="text"
                    name="message"
                    placeholder="Message..."
                    className="w-full rounded-md border border-black p-2"
                />
                <button
                    type="submit"
                    className="bg-one text-three flex w-fit items-center gap-2 rounded-full border border-black px-10 py-2"
                >
                    Send
                    <TfiEmail />
                </button>
            </form>
        </div>
    )
}

export default Message
