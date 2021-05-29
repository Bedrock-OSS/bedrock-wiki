---
layout: page
title: Version Control
parent: Knowledge
badge: NEW
badge_color: blue
---

# What is Version Control?



Version control is the concept of backing up your code iteratively, so you can roll-back to specific versions as needed. At the most basic level, version control could be achieved by taking a `.zip` of your addon every day, and uploading it to google drive. This isn't unreasonable, but it has three major difficulties, that proper VCS (version control systems) fix:

 - It is difficult to compare versions
 - It is difficult to *actually* roll-back to a previous version
 - It doesn't do anything to help in team-collaboration 

This tutorial will focus on teaching the basics of a tool called `git`, and a free, online git storage service called `github`. Anyone may follow along, but you will receive the most benefit if you are working in a team environnement, or often lose your work because you forget to back-up.

This tutorial will not actually be focusing directly on teaching `git` or `github`, as this is better done by outside knowledge sources. The focus will be how to setup these tools for Minecraft, once the basics have been learned.

## Git

`git` is a tool that is installed locally on your machine, and allows you to version your files. You can `commit` changes to your files with a small message (ex. "Fixed issue where dragons couldn't fly after being tamed"), view the full change-list, and quickly jump back to specific changes. 

Git is insanely powerful, and the de-facto tool for all major programming projects. The largest drawback for MC work is that it is *complicated*. Be patient while learning.

For a full walk-through of `git`, you should follow the following [git tutorial.](https://www.atlassian.com/git/tutorials/what-is-git)

## GitHub

GitHub is a version of your git project (`repository`) that is hosted online. This allows multiple people to work on the same project at the same time, and collaborate. This is obviously very helpful for map-making. By hosting on github, you can also (optionally) make your code public, making it easier than ever to share your addons with the world. 

For a full walkthough of using `Github`, you should follow this [github tutorial](https://guides.github.com/activities/hello-world/).

## Vocabulary Quiz

If you've gotten this far, hopefully you have a GitHub account, and are familiar with `git` in a small way. The following terms will be used in this tutorial. If you don't know them, please google :)

 - repository
 - branch
 - commit
 - github
 - git

# Setting up Git

This assumes you are adding an *existing* project to git. The steps are similar if you are starting from scratch.

## Structure

The big issue with using `git` for addons is that `git` generally works by encapsulating a *single* folder, and managing it. Of course in Bedrock Addons, assets are actually spread across two folders: The `BP`, and `RP`. To get around this issue, we are actually going to place our repository outside of the `com.mojang` folder completely, and then use window `junctions` to "copy" the folders in.

There are many advantages of placing our project in a separate location:
- We can include additional files as needed, such as config files, tools, notes, .bb files etc
- We can combine the RP and the BP into one repository
- All of our projects can be easily viewed in a simple location, instead of nested deep within com.mojang

## Creating a Git Repository

Pick a convenient location for your projects. I placed mine at `C:/sirlich/projects`. Make a new folder, with the name of your map. We will be using `wiki` as the name of our mock-project.

Right click the folder, and click `"Open git Bash"`. If this option doesn't appear, you can open `git bash` from the start menu, and navigate to your project folder. If you don't have `git bash` installed, you should do so now.

Type: `git init`. This will create a blank repository in your project.

## Linking your existing RP and BP

The next step, is to make the repository aware of your RP and BP folders. We will be using window symlink "junctions". When we create a junction, we are essentially creating a wormhole in our file system, that will make it appear like your files are in two places at once. Deleting/editing/adding files is perfectly copied over.

Type: `mklink /J wiki_RP "C:/path/to/RP/in/com/mojang"`
Type: `mklink /J wiki_BP "C:/path/to/BP/in/com/mojang"`

When you are finished, you should see `wiki_RP` and `wiki_BP` in your project folder, containing all your assets, existing files, etc.

You can now push this repository to `github`, following the tutorial above.

## Extra Files

Because we created our repository based on symlinks, we can add anything we like into the project folder, without worrying about breaking the com.mojang folder. I personally like to track `.bb` files, cover-art files (`.kra` etc).

You can also add notes, video files, or anything else you want to track.

## Working with your VCS

The main things to remember about working with VCS:
 - Always `pull` before starting work
 - Commit and `push` often
 - Always `push` before stopping work
 - If you screw up your files super bad, you can always reset to the last working version. If you commit/push often, hopefully this wasn't too long ago.
 - Always, and I mean `always` make proper commit messages. It's vital when you have to roll back.
 
 
