"use client"

import Image from "next/image";
import f1GPTLogo from "./assets/f1GPTLogo.png";
import { useChat } from "ai/react";
import { Message } from "ai";
import Bubble from "./components/Bubble";
import LoadingBubble from "./components/LoadingBubble";
import PromptSuggestionsRow from "./components/PromptSuggestionsRow";
import { v4 as uuidv4 } from 'uuid'; 

const Home = () => {
    const {append, isLoading, messages, input, handleInputChange, handleSubmit} = useChat()

    const noMessages = !messages || messages.length === 0

    const handlePrompt = ( promptText ) => {
        const msg: Message = {
            id: uuidv4(),
            content: promptText,
            role: "user"
        }
        append(msg)
    }
    
    return(
        <main>
            <Image src={f1GPTLogo} width="250" alt="F1 GPT Logo" />

            <section className={noMessages ? "" : "populated"}>
                {noMessages? (
                    <>
                        <p className="starter-text">
                            Welcome to F1 GPT! Ask me anything about Formula 1 and I'll do my best to answer.
                        </p>
                        <br />
                        <PromptSuggestionsRow onPromptClick={handlePrompt}/>
                    </>
                ) : (
                    <>
                        {/* Map messages onto text bubbles */}
                        {messages.map((message, index) => <Bubble key={`message-${index}`} message={message}/>)} 
                        {isLoading && <LoadingBubble/>}
                    </>
                )}
            </section>
            <form onSubmit={handleSubmit}>
                <input className="question-box" onChange={handleInputChange} value={input} placeholder={"Ask me something.. "}>
                


                </input>


                <input type="submit"> 
                
                </input>

            </form>
        </main>
    ) 
}

export default Home;