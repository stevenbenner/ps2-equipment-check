# PlanetSide 2 Equipment Check

This is a tool to check all of the members of my [PlanetSide 2](https://www.planetside2.com/) outfit and determine if they have the equipment required for participating in specialized squad/platoon game play. It uses the [census.soe.com](https://census.soe.com/) API to pull outfit and character information.

[![Dependency Status](https://gemnasium.com/stevenbenner/ps2-equipment-check.png)](https://gemnasium.com/stevenbenner/ps2-equipment-check)

## Usage

This is an entirely client-side web application. To run the tool simply open the index.html file in a web browser.

## Item Definitions

The API does not presently offer a way to easily resolve items by class, vehicle, or weapon, nor is there a public list of all items in-game with their names, ids, and associations. This means that item definitions must be manually looked up and added to the item definitions object before you can check for that item with this tool.

Right now the item definitions list is very limited because I have only bothered to add items that I need to specifically look for.

### Looking Up Items

In most cases looking up an item using the API is fairly simple. The simplest way to find an item is to use the string search query.

**Example API query:**

`http://census.soe.com/get/ps2-beta/item?name.en=^Medical&c:start=0&c:limit=25&c:show=name.en,classes_list,faction`

This will return a list of items whose (English) name begins with `Medical` as well as the classes/factions that can use that item.

## License

*(This project is released under the [MIT license](https://raw.github.com/stevenbenner/ps2-equipment-check/master/LICENSE.txt).)*

Copyright (c) 2013 Steven Benner (http://stevenbenner.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
