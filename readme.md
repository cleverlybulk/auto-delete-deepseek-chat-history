# Introduction
since i was using deepseek with a junk account i thought about the following scenarion :
what could happen if someone has access to my account well he will know that i have a vps and see what probably is installed on it !!
> so deleting chat history is a good idea 
# How to use 
1- copy script.js 
2- open the console of the browser using F12 or click anywhere on the page and click on inspect element then chose the console tab 
3- write in the console 
```
allow pasting
```
since the console doesn't allow pasting by default 
4- past the script into the console and hit enter 
or you can copy it from here :
```
// Direct DOM manipulation approach
(function forceDelete() {
    // First, let's find all the conversation containers
    const conversations = document.querySelectorAll('._83421f9');
    console.log(`Found ${conversations.length} conversations to delete`);
    
    // Create a delete function that simulates the actual delete process
    function simulateDelete(conversationElement) {
        // Try to find and click the menu button within this conversation
        const menuButton = conversationElement.querySelector('._2090548');
        if (menuButton) {
            console.log('Clicking menu button...');
            menuButton.click();
            
            // Wait a bit for menu to appear, then look for delete option
            setTimeout(() => {
                // Look for delete options in the entire document (menu might be in a portal)
                const deleteOptions = document.querySelectorAll('*');
                let foundDelete = false;
                
                deleteOptions.forEach(element => {
                    const text = (element.textContent || '').toLowerCase().trim();
                    if (text === 'delete' || text === '删除') {
                        console.log('Found delete text, clicking...');
                        element.click();
                        foundDelete = true;
                    }
                });
                
                if (!foundDelete) {
                    console.log('No delete option found after menu click');
                }
            }, 500);
        }
    }
    
    // Process each conversation with delays
    conversations.forEach((convo, index) => {
        setTimeout(() => {
            console.log(`Processing conversation ${index + 1}`);
            simulateDelete(convo);
        }, index * 1500);
    });
})();
```
5- watch the magic !
![Alt text describing the image](Screenshot from 2025-08-20 00-14-41.png.png)
