<template>
    <div class="homepage max-w-screen-md xl:max-w-screen-lg mx-auto">
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
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 m-0 p-0">
                <CardLink title="Beginner's Guide" imgsrc="assets/images/homepage/crafting_table_0.png" link="guide/">
                Step-by-step tutorials, intended as your first-contact with addons.
                </CardLink>
                <Card title="Learn" imgsrc="assets/images/homepage/bookshelf_0.png">
                <a href="#">Concepts</a>: The first introduction to a concept, intended to be read in-full.<br/>
                <a href="#">Tutorials</a>: Tutorial-like write-ups, containing specific instructions and example json.
                </Card>
                <Card title="Items" imgsrc="assets/images/homepage/iron_pickaxe_0.png">
                <a href="items/guide.html">Beginner's Guide</a>: A "Hello world" guide in creating your first item.<br/>
                <a href="items/documentation.html">Documentation</a>: Item tags, events and etc. are covered here.
                </Card>
                <Card title="Blocks" imgsrc="assets/images/homepage/diamond_ore_0.png">
                <a href="blocks/guide.html">Beginner's Guide</a>: A "Hello world" guide in making blocks.<br/>
                <a href="blocks/documentation.html">Documentation</a>: Block tags, events, permutations and etc. are covered here.
                </Card>
                <Card title="Entities" imgsrc="assets/images/homepage/spawn_egg_30.png">
                <a href="entities/guide.html">Beginner's Guide</a>: Doesn't exist yet.<br/>
                <a href="entities/documentation.html">Documentation</a>: This doesn't exist too.
                </Card>
                <Card title="Scripting" imgsrc="assets/images/homepage/lever_0.png">
                <a href="scripting/guide.html">Beginner's Guide</a>: Start learning scripting here.<br/>
                <a href="scripting/documentation.html">Documentation</a>: This doesn't exist yet.<br/>
                <a href="scripting/game-tests.html">Game Test Framework</a>: Everything about the new Scripting API.
                </Card>
                <CardLink title="Contribute" imgsrc="assets/images/homepage/writable_book_0.png" link="contribute">
                If you feel you can help the Bedrock addons community or improve this Wiki with your knowledge, feel free to contribute!
                </CardLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dark .homepage * {
	border-color: rgb(93, 95, 97);
}
</style>