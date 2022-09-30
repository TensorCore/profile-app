const ContactMe = () => {
    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        //@ts-ignore
        const email = e.target.email?.value
        //@ts-ignore
        const subject = e.target.subject?.value
        //@ts-ignore
        const message = e.target.message?.value

        if (email.length === 0 || subject.length === 0 || message.length === 0) {
            alert('Please fill out all fields')
            return
        }
        e.preventDefault();
        fetch('/api/send-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                subject,
                message
            })
        })
            .then(res => res.json())
            .then((data) => console.log(data))
    }

    return (
        <div className="card">
            <h1 className="flex justify-center prose mb-5">You can reach me at shakerad0109@gmail.com</h1>
            <div className="divider lg:divider-vertical">OR</div>
            <div className="flex justify-center">
                <a target="_blank" href="https://www.linkedin.com/in/adamshaker/" rel="noopener noreferrer" ><div className='btn prose text-primary-content bg-primary hover:bg-primary-focus'>My Linkedin</div></a>
            </div>
            <div className="divider lg:divider-vertical">OR</div>
            <form className="form-control mt-5" onSubmit={submitHandler}>
                <input id="email" type="email" placeholder="Email" className="input input-ghost required" />
                <input id="subject" type="text" placeholder="Subject" className="input input-ghost required" />
                <textarea id="message" className="textarea h-40 required" placeholder="Message"></textarea>
                <button type="submit" className="mt-5 p-2 btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ContactMe;