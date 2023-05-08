# The Zoo

Det skall gå att mata djuren.
En lista med djur finns tillgänglig på:
https://animals.azurewebsites.net/api/animals

Du behöver ladda ner djuren till din applikation och spara dem i applikationen. Det kommer inte gå att ändra djuren via api:t.

Förslagsvis lagrar du dem i localStorage eller sessionStorage.

**För G:**

- Skapa en SPA (i react med typescript) som innehåller en startsida där djuren presenteras med namn och en kort beskrivning.

- Det skall gå att klicka på ett djur för att se mer information om detta djur via en egenroute.

- Från djurets egna sida skall du kunna markera om djuret nu är matat eller inte, via en knapp som heter "Mata djur". När du klickar på denna knapp skall djurets status ändras så att det framgår att det är matat. Och det skall inte längre gå att klicka på knappen. Du behöver också lägga in tiden som djuret matades.

**VG:**

- När du går in på djurets sida nästa gång kontrollerar du om det har gått mer än tre timmar sedan senaste matningen. Om så är fallet nollställs matningen och det skall gå att mata djuret igen.

- För lite extra utmaning, skall ni presentera en liten notis på startsidan, samt på djursidan, om att ett djur behöver matas om det är mer än fyra timmar sedan djuret matades.
