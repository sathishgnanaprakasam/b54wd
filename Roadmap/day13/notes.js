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

/*
    (45) base 10 => decimal or denary => 0-9


    example : 1234, 5678, 9012, 32, 45, 67, 89, 10, 11, 12, 13, 14, 15, 16

    (45fa4de6) base 16 => hexadecimal => 0-9, a-f


    10 - a
    11 - b
    12 - c
    13 - d
    14 - e
    15 - f

    10f0 - decimal or binary or octal or hexadecimal


    infix expression => 1 + 2
    prefix expression => + 1 2
    postfix expression => 1 2 +

*/