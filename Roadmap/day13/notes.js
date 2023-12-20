/*

    List of Topics to be covered: 
        What is DOM?
        createElement, 
        setAttribute
        getElementById, 
        querySelector vs querySelectorAll
        innerHTML vs innerText
        appendChild vs append
    
    What is DOM?
        DOM - Document Object Model

        DOM is a programming interface for HTML documents. We can dynamically
        manipulate the structure of HTML document using DOM, also styling it and handling events.

        DOM is a tree-like structure of HTML elements. Each element is a node in the tree.

        Parent node - node that is higher in the tree
        Child node - node that is lower in the tree

        For example:

        <html>
            <head></head>
            <body>
                <div>
                    <h1></h1>
                    <p></p>
                </div>

                <div>
                    <p></p>
                </div>
            </body>
        </html>

        Tree Structure:

        html <- root node / parent node
        |
        |----head <- child node
        |
        |----body <- child node
                |
                |----div
                |       |
                |       |----h1 <- child node
                |       |
                |       |----p
                |
                |----div
                        |
                        |----p

*/