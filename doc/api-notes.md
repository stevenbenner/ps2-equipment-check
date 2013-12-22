# API Notes

This document contains some useful notes for using the [census.soe.com](https://census.soe.com/) API to find important information by hand.

## Item Definitions

The API does not presently offer a way to easily resolve items by class, vehicle, or weapon, nor is there a public list of all items in-game with their names, ids, and associations. This means that item definitions must be manually looked up and added to the item definitions object before you can check for that item with this tool.

Right now the item definitions list is very limited because I have only bothered to add items that I need to specifically look for.

### Looking Up Items

In most cases looking up an item using the API is fairly simple. The simplest way to find an item is to use the string search query.

**Example API query:**

`http://census.soe.com/get/ps2:v1/item?name.en=^Medical&c:start=0&c:limit=25&c:show=name.en,classes_list,faction`

This will return a list of items whose (English) name begins with `Medical` as well as the classes/factions that can use that item.
