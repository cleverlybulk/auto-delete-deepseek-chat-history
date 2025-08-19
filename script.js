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
