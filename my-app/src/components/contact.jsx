const Contact = () =>{
    return(
        <section className="pt-25 px-3">
            <form action="">
                <label htmlFor="name" className="text-white">
                    Your name
                    <input type="text" className="form-input" id="name" placeholder="Enter your name"/>
                </label>
                <label htmlFor="email" className="text-white">
                    Your Email
                    <input type="text" className="form-input" id="email" placeholder="you@example.com"/>
                </label>
                <label htmlFor="timeframe" className="text-white">
                    Timeframe (optional)
                    <input type="text" className="form-input" id="timeframe" placeholder="Enter date or approx timeframe"/>
                </label>
                <label htmlFor="budget" className="text-white">
                    Project Budget (optional)
                    <input type="text" className="form-input" id="budget" placeholder="what is your budget?"/>
                </label>
                <label htmlFor="message" className="text-white">
                    Message
                    <input type="text" className="form-input h-30" id="message" placeholder="Enter your message"/>
                </label>                                                                
            </form>
        </section>
    )
}

export default Contact