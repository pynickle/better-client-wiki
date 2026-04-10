# Chat

### **1.** *Chat Up*  (1.21.1+)
* When you have armor value, the chat bar will move up ten pixels to avoid overlapping with the armor value display.

### **2.** *Longer Chat History*  (1.21.1+)
* Chat history now extends from the vanilla 100 to 4096 (configurable).

### **3.** *Chat History Retention*  (1.21.1+)
* Now, quitting the world and server will not clear the chat history.

### **4.** *Persistent Chat History*  (26.1+)
* Chat history is saved per world / server and can be restored after rejoining or restarting the game.

### **5.** *Restored History Separator*  (26.1+)
* Insert a configurable separator between restored chat history and newly received messages, with placeholders and color formatting support.

### **6.** *Mention Autocomplete*  (26.1+)
* Typing `@` in the chat input reuses the vanilla command suggestion popup to complete online player names on the current server.
* Accepting a suggestion inserts `@name ` (with a trailing space) and highlights only the mention segment with a configurable color.
* If the whole input starts with `/`, this feature does not trigger, and the feature itself can be toggled in config.

### **7.** *TimeStamp*  (1.21.1+)
* The time is now displayed before the chat message.

### **8.** *Chat Formatter*  (1.21.1, 1.21.9+)
* Automatic replacement of placeholders like {pos} with actual player coordinates.
