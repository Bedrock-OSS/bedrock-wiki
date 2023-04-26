---
title: File Types
mention:
    - Ciosciaa
---

A number of file types exist for *Minecraft*, all for importing content. All *Minecraft* files are ZIP archives renamed to use a `mc…` extension. These archives can currently be divided into three sets:

- **Levels (`mcworld` and `mcproject`)**: level data and associated resources for worlds and projects
- **Assets (`mcpack` and `mctemplate`)**: cosmetics or supporting assets for worlds
- **Composites (`mcaddon` and `mceditoraddon)`**: used to import up to one world or project and any number of asset types

All file types for Minecraft can be opened as any file, launching Minecraft and importing the content. When packages are imported, they are automatically unpacked into their constituent files and directories. If it was not already open, most file types will launch Minecraft in normal mode; `mcproject` and `mceditoraddon` will instead launch Minecraft into Editor mode.

## Levels
Levels represent save data and resources for regular worlds and Editor projects. All levels, regardless of mode, are imported to `minecraftWorlds` in the `com.mojang` directory.

Importing an exact duplicate of an existing saved level will create a duplicate saved level. Composite archives will only import one level if multiple are included, including across nested composite archives.

### Worlds
`mcworld`
Archive encapsulating an individual world

World archives can be created a few different ways:
- Zipping the *contents* of a world directory and renaming the extension from `zip` to `mcworld`
- Using the "Export World" button on the Game settings screen for a world
- In Editor mode, exporting the world from the File → Export as → Playable world menu option. The world will be saved to the `projectbackups` directory in the `com.mojang` folder.
- In Editor mode, running the `/project export world` command. The world will be saved to the `projectbackups` directory in the `com.mojang` folder.

Importing a world package while *Minecraft* is launched in Editor mode will import the world as a project. The imported world will then be inaccessible outside Editor mode and will need to be re-exported as a world for playing. Editor extension packs bundled in a world archive will be retained on import outside Editor mode.

### Projects
`mcproject`
Archive encapsulating an individual Editor project

Project archives can be created two different ways:
- Zipping the *contents* of a project directory and renaming the extension from `zip` to `mcproject`.
- Using the "Export Project" button on the Game settings screen for a world
- In Editor mode, running the `/project export project` command. The world will be saved to the `projectbackups` directory in the `com.mojang` folder.

If *Minecraft* is not open, launching a `mcproject` file will open Editor mode. Importing a `mcproject` will fail if *Minecraft* is open but not in Editor mode.

## Assets
Asset archives represent a singular instance of a number of non-level contents:

- Behavior packs
- Resource packs
- Skin packs
- World templates

All asset archives include a manifest describing their contents. An asset archive will fail to import if its manifest UUID and version exactly matches an existing asset archive of the same type. Note that behavior and resource packs share the same UUID/version space. Behavior and resource packs self-contained within a world, project, or template will not count as duplicates for the sake of importing.

Both asset extensions, `mcpack` and `mctemplate`, appear to functionally behave the same. It's best practice to use `mcpack` for behavior, resource, and skin packs and `mctemplate` for world templates to make it more clear what's being installed. Any number of asset archives may be included in a composite archive.

### Packs
`mcpack`
Package representing an individual behavior pack, resource pack, skin pack, or world template. It's recommended only to use `mctemplate` for behavior packs, resource packs, or skin packs.

Packs are only created manually, by zipping the contents of a behavior pack, resource pack, or skin pack directory and renaming the extension from `zip` to `mcpack`. Behavior and resource packs are installed globally and do not conflict with matching behavior or resource packs installed in worlds, projects, or templates.

#### Behavior Packs
Behavior packs are attached to servers to change or extend gameplay. Behavior packs are installed to the `behavior_packs` directory in the `com.mojang` folder.

Development behavior packs must be placed in the `development_behavior_packs` directory under `com.mojang` manually.

#### Resource Packs
Resource packs are attached to clients to affect sounds, visuals, etc. Resource packs are installed to the `resource_packs` directory in the `com.mojang` folder.

Development resource packs must be placed in the `development_resource_packs` directory under `com.mojang` manually.

#### Skin Packs
Skin packs are client-only packs for custom skins. Skin packs are installed to the `skin_packs` directory in the `com.mojang` folder.

Development skin packs must be placed in the `development_skin_packs` directory under `com.mojang` manually, but this feature appears non-functional.

### World Templates
`mctemplate`
Package representing an individual behavior pack, resource pack, skin pack, or world template. It's recommended only to use `mctemplate` for world templates.

World templates are installed to the `world_templates` directory under `com.mojang`. World templates can be constructed in a few different ways:
- Zipping the *contents* of a world directory, adding a world template manifest, and renaming the extension from `zip` to `mctemplate`
- In Editor mode, using the "Export Template" button on the Game settings screen for a world
- In Editor mode, running the `/project export template` command. The world will be saved to the `projectbackups` directory in the `com.mojang` folder.

## Composites
Composite archives are used to import up to *one* level archive and any number or combination of asset archives in a single import action. In general, contents to a composite must be packaged. Directories can also be given *on the top level* of a composite archive for importing asset types (behavior packs, resource packs, skin packs, and world templates) without needing to pre-package them. Nested sub-directories for organization may not be used.

Composite contents are treated as usual. For example, importing a `mcaddon` contianing a `mcworld` while in Editor mode will import the world as a project.

Composite archives may also contain any number or nesting of other composite archives, even across *Minecraft* modes. Nested composite archives cannot be used to get around the singular world import restriction.

Composites can only be constructed manually by zipping archives and asset types.

### Add-Ons
`mcaddon`
Generic composite content archive

Importing a `mcaddon` package while *Minecraft* is launched in Editor mode will import any contained world as a project. The imported world will then be inaccessible outside Editor mode and will need to be re-exported as a world for playing. Asset types are imported as usual.

### Editor Add-Ons
`mceditoraddon`
Composite content archive for Editor mode

If *Minecraft* is not open, launching a `mcproject` file will open Editor mode. Importing a `mcproject` will fail if *Minecraft* is open but not in Editor mode.