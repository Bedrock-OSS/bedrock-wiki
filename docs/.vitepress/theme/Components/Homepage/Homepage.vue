<template>
    <div class="homepage max-w-screen-md mx-auto">
        <div class="hidden md:flex justify-start flex-row flex-nowrap my-10 py-0 w-full">
            <div class="flex justify-center flex-col flex-nowrap">
                <img src="/assets/images/homepage/wikilogo.png" class="object-contain" style="max-height: 116px; min-width: 72px;">
            </div>
            <div class="ml-4 flex justify-center flex-col flex-nowrap">
                <h1 class="mt-0">Bedrock Wiki</h1>
                <p>This wiki is a knowledge-sharing website for Technical Bedrock, containing documentation, tutorials, and general how-to information.</p>
            </div>
        </div>
        <div class="flex md:hidden justify-start flex-col flex-nowrap my-6 py-0 w-full">
            <div class="flex justify-start items-center flex-row flex-nowrap">
                <img src="/assets/images/homepage/wikilogo.png" class="object-contain" style="height: 64px;">
                <h1 class="!my-0 ml-4">Bedrock Wiki</h1>
            </div>
            <div class="mt-4 flex justify-center flex-col flex-nowrap">
                <p>This wiki is a knowledge-sharing website for Technical Bedrock, containing documentation, tutorials, and general how-to information.</p>
            </div>
        </div>
        <div class="m-0 p-0 pb-4 w-full">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 m-0 p-0">
                <CardLink title="Beginner's Guide" imgsrc="assets/images/homepage/crafting.png" link="guide/">
                Step-by-step tutorials, intended as your first-contact with addons.
                </CardLink>
                <Card title="Learn" imgsrc="assets/images/homepage/makinghub.png">
                <ul>
                    <li><a href="#">Concepts</a>: The first introduction to a concept, intended to be read in-full.</li>
                    <li><a href="#">Knowledge</a>: Top-level information, such as editor recommendations.</li>
                    <li><a href="#">Tutorials</a>: Tutorial-like write-ups, containing specific instructions and example json.</li>
                </ul>
                </Card>
                <Card title="Documentation" imgsrc="assets/images/homepage/earth.png">
                <ul>
                    <li><a href="documentation/">Documentation</a>: Proper documentation, such as lists of all available sounds.</li>
                    <li><a href="#">Vanilla Usage</a>: Vanilla examples for entities, items, etc.</li>
                </ul>
                </Card>
                <CardLink title="Contribute" imgsrc="assets/images/homepage/friends.png" link="contribute">
                If you feel you can help the Bedrock addons community or improve this Wiki with your knowledge, feel free to contribute!
                </CardLink>
            </div>
        </div>
    </div>
</template>