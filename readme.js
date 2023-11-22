/*
    1. Open terminal in mac or linux & command prompt in windows
    2. dir command - list all files and folders in current directory
    3. cd command - change directory
    4. cd .. - go back to parent directory
    5. cd Desktop or cd Documents - go to Desktop or Documents directory
    6. mkdir foldername command - create a new directory
    7. cd foldername - go to foldername directory
    8. open the folder in vscode - either code . or open visual studio code and open the folder
    9. check the version of the git installed by 
        - open the terminal inside vscode from terminal menu
        - git --version or git -v
    10. open github.com and create a new repository
        - give the repository name
        - leave the visibility as public
        - create repository
    11. copy the url of the repository
    12. configure the git with the username and email (only once)
        - git config --global user.name "your username"
        - git config --global user.email "your email"
    13. add the remote repository url to the local repository
        - git remote add origin "https://github.com/sathish-fullstackdeveloper/b54wd.git"
    14. check the remote repository url is added or not
        - git remote -v
    15. check the status of the local repository to know the files which are modified
        - git status
    16. add the files to the staging area
        - git add . or git add filename
    17. commit the files to the local repository with a message
        - git commit -m "message"
    18. push the files to the remote repository
        - git push origin master
    19. to view all the commit history
        - git log
    20. to checkout to a particular commit
        - git checkout commitid
*/