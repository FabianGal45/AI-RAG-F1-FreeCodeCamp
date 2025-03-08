
import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionsRow = ({ onPromptClick }) => {
    const prompts = [
        "Who is the head of racing for Aston Martin's F1 team?",
        "What is the name of the F1 team owned by Red Bull?",
        "Who is the current F1 world champion?",
        "who is the newest driver for Ferrari?",
    ]


    return(
        <div className="prompt-suggestion-row">
            {prompts.map((prompt, index) => 
                <PromptSuggestionButton 
                    key={`suggestion-${index}`} 
                    text={prompt} 
                    onClick={() => onPromptClick(prompt)} 
                />
            )}
        </div>
    )
    
}

export default PromptSuggestionsRow;