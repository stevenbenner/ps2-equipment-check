# API Notes

This document contains some useful notes for using the [census.soe.com](https://census.soe.com/) API to find important information by hand.

## Skill and Item Definitions

Skills and items are built into this tool by adding the IDs for the relevant fields to the relevant JSON files. Right now the definitions list is TR specific and very limited because I have only bothered to add items that I need to specifically look for.

### Skill Definitions

The API does not presently offer a way to easily resolve skills by class, vehicle, or weapon, nor is there a public list of all skills in-game with their names, ids, and associations. This means that skill definitions must be manually looked up and added to the skill definitions object before you can check for that skill with this tool.

#### Finding Skill IDs

To add a skill definition you need to find the skill line ID and the skill ID for each rank of that skill.

##### Find the skill line

First you need to find the skill line id for the desired skill from a character that actually has that skill. Remember that skill and skill line ids are faction specific.

> **Good TR query**: http://census.soe.com/get/ps2:v2/characters_skill/?character_id=5428010618035589553&c:limit=5000&c:lang=en&c:join=skill(skill_line(skill_category,skill_set))

##### Get skills by skill line id

Then you can select that skill line, join the skill set to get profile info, and join each skill queried by skill_line_index (skill rank).

> **Example query:** http://census.soe.com/get/ps2:v2/skill_line?c:limit=1000&c:lang=en&c:join=skill_set,skill^terms:skill_line_index=0^inject_at:rank1,skill^terms:skill_line_index=1^inject_at:rank2,skill^terms:skill_line_index=2^inject_at:rank3,skill^terms:skill_line_index=3^inject_at:rank4,skill^terms:skill_line_index=4^inject_at:rank5&skill_line_id=16729

### Item Definitions

Items suffer similar limitations to the skills data, but are much easier to look up because they are unique and don't have levels or faction ambiguity.

#### Finding Item IDs

In most cases looking up an item using the API is fairly simple. The simplest way to find an item is to use the string search query.

> **Example query:** http://census.soe.com/get/ps2:v2/item?c:limit=1000&c:lang=en&name.en=^NS-7
