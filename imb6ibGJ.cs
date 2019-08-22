function DecodeCharacterData() {
	StartNode("Character Data");
	
	StartNode("Damage Calculation Seeds");
	
	count = 3;
	
	for (i = 1; i <= count; i++) {
		AddInt("Seed " + i);
	}
	
	EndNode(false);
	
	flag = AddLong("Flag");
	
	AddByte("Combat Orders");
	
	StartNode("Pet Cooldowns");
	
	count = 3;
	
	for (i = 1; i <= 3; i++) {
		AddInt("Pet Cooldown " + i);
	}
	
	EndNode(false);
	
	AddByte("Unknown");
	AddInt("Unknown");
	AddByte("Unknown");
	AddByte("Unknown");

	DecodeCharacterStats();
	
	AddByte("Buddylist Capacity");
	
	StartNode("Blessings");
	
	if (AddBool("Blessing 1")) {
		AddString("Blesser");
	}
	if (AddBool("Blessing 2")) {
		AddString("Blesser");
	}
	if (AddBool("Blessing 3")) {
		AddString("Blesser");
	}
	
	EndNode(false);

	DecodeCharacterItems();
	DecodeCharacterSkills();
	DecodeCharacterQuests();
	DecodeCharacterMatchRecords();
	DecodeCharacterRings();
	DecodeCharacterTeleportRocks();
	DecodeCharacterMonsterBook();
	DecodeCharacterNewYearCards();
	AddInt("Unknown");
	DecodeCharacterUnknownData();
	AddShort("Unknown"); // NOTE: Possibly androids.
	AddInt("Unknown");
	AddShort("Unknown");
	AddShort("Unknown");
	AddField("Unknown", 154);
	DecodeCharacterFarm();
	AddField("Unknown", 231);
	AddInt("Account Identifier");
	AddInt("Character Identifier");
	AddInt("Unknown");
	AddInt("Unknown");
	DecodeCharacterRedLeaf();
	AddField("Unknown", 6);
	AddLong("Server Time");
	AddInt("Unknown");
	AddShort("Unknown");
	AddBool("Unknown");
	AddField("Unknown", 7);
	AddByte("Unknown");
	AddInt("Unknown");
    AddInt("Unknown");
    AddInt("Unknown");
	
	EndNode(false);
}

function DecodeCharacterStats() {
	StartNode("Stats");
	
	AddInt("Identifier");
	AddInt("Identifier");
	AddInt("Unknown");
	AddPaddedString("Name", 13);
	AddByte("Gender");
	AddByte("Skin");
	AddInt("Face");
	AddInt("Hair");
	AddByte("Unknown");
	AddByte("Unknown");
	AddByte("Unknown");
	AddByte("Level");
	AddShort("Job");
	AddShort("Strength");
	AddShort("Dexterity");
	AddShort("Intelligence");
	AddShort("Luck");
	AddInt("Health");
	AddInt("Max Health");
	AddInt("Mana");
	AddInt("Max Mana");
	AddShort("Ability Points");
	AddByte("Skill Points"); // TODO
	AddLong("Experience");
	AddInt("Fame");
	AddInt("Weapon Points");
	AddInt("Gachapon Experience");
	AddInt("Map Identifier");
	AddByte("Map Spawn");
	AddInt("Unknown");
	AddShort("Subcategory");
	AddByte("Fatigue");
	AddInt("Current Date");
	AddField("Traits", 36);
	AddByte("Unknown");
	AddField("Unknown", 127);
	
	EndNode(false);
}

function DecodeCharacterItems() {
	StartNode("Items");
	
	AddLong("Meso");
	AddInt("Unknown");
	AddInt("Unknown");
	AddInt("Unknown");
	AddInt("Character Identifier");
	AddField("Unknown", 31);
	AddByte("Equipment Slots");
	AddByte("Usable Slots");
	AddByte("Setup Slots");
	AddByte("Etcetera Slots");
	AddByte("Cash Slots");
	AddLong("Time");
	AddByte("Unknown");
	
	DecodeEquipmentInventory("Equipped");
	DecodeEquipmentInventory("Equipped Cash");
	DecodeEquipmentInventory("Equip");
	
	AddShort("Unknown Items");
	AddShort("Dragon Items");
	AddShort("Mechanic Items");
	AddShort("Android Items");

	for ( i = 0; i < 8; i++) {
		AddShort("Unknown Items");
	}

	DecodeInventory("Usable");
	DecodeInventory("Setup");
	DecodeInventory("Etcetera");
	DecodeInventory("Cash");

	AddField("Extended Slots", 17);
    AddInt("Unknown");
	
	EndNode(false);
}

function DecodeCharacterSkills() {
	StartNode("Skills");

	if (AddBool("New Format")) {
		count = AddShort("Count");
		
		for (i = 1; i <= count; i++) {
			StartNode("Skill " + i);
			
			AddInt("Identifier");
			AddInt("Current Level");
			AddLong("Expiration");
			
			EndNode(false);
    	}
	
		AddInt("Unknown"); // NOTE: Yes, I know it's cooldowns. I'm lazy!
	} else {
        AddComment("The old format is not supported!");
	}
		
	EndNode(false);
}

function DecodeCharacterQuests() {
	StartNode("Quests");
	
	StartNode("Started");
	
	if (AddBool("New Format")) {	
		count = AddShort("Count");
		
		AddField("Unknown", 6);
		
		for (i = 1; i < count; i++) {
			StartNode("Quest " + i);
			
			AddInt("Identifier");
			AddString("State");
			
			EndNode(false);
		}
	} else {
		AddComment("The old format is not supported!");
	}
		
	EndNode(false);
		
	StartNode("NX");
		
	count = AddShort("Count");
		
	for (i = 1; i <= count; i++) {
		StartNode("Quest " + i);
			
		AddString("Unknown");
		AddString("Unknown");

		EndNode(false);
	}

	EndNode(false);
	
	StartNode("Completed");
	
	if (AddBool("New Format")) {
		count = AddShort("Count");
		
		for (i = 1; i <= count; i++) {
			StartNode("Quest " + i);
			
			AddInt("Identifier");
			AddInt("Completion Time");
		
		    EndNode(false);
		}
	} else {
	    AddComment("The old format is not supported!");
	}
		
	EndNode(false);
	
	EndNode(false);	
}

function DecodeCharacterMatchRecords() {
	StartNode("Match Records");
	
	count = AddShort("Count");
	
	// TODO: Complete this crap.
	
	EndNode(false);
}

function DecodeCharacterRings() {
	StartNode("Rings");
	
	count = 3;
	
	for (i = 1; i <= count; i++) {
		AddShort("Ring " + i);
	}
	
	EndNode(false);
}

function DecodeCharacterTeleportRocks() {
	StartNode("Teleport Rocks");
	
	count = 41;
	
	for (i = 1; i <= count; i++) {
		AddInt("Teleport Rock " + i);
	}
	
	EndNode(false);
}

function DecodeCharacterMonsterBook() {
    StartNode("Monster Book");
	
	AddInt("Unknown");
	AddBool("Completed");
	
	StartNode("Cards");
	
	count = AddShort("Count");
	
	// TODO: Fix this crap.
	
	EndNode(false);
	
	AddInt("Selected Card");
	AddShort("Unknown");
	
	EndNode(false);
}

function DecodeCharacterNewYearCards() {
	StartNode("New Year Cards");
	
	count = AddShort("Count");
	
	// TODO: Fix this crap.
	
	EndNode(false);
}

function DecodeCharacterUnknownData() {
	StartNode("Unknown Data");
	
	count = AddShort("Count");
	
	for (i = 1; i <= count; i++) {
		StartNode("Unknown Data " + i);
		
		AddInt("Identifier");
		AddString("Data");
		
		EndNode(false);
	}
	
	EndNode(false);
}

function DecodeCharacterFarm() {
	StartNode("Farm");
	
	AddString("Name");
	AddInt("Waru");
	AddInt("Level");
	AddInt("Experience");
	AddInt("Aesthetic Points");
	AddInt("Gems");	
	AddByte("Unknown");
	AddInt("Unknown");
	AddInt("Unknown");
	AddInt("Unknown");

	EndNode(false);
}

function DecodeCharacterRedLeaf() {
	StartNode("Red Leaf");
	
	count = 4;
	
	for (i = 1; i <= count; i++) {
		StartNode("Red Leaf " + i);
		
		AddInt("Unknown");
		AddInt("Unknown");
		
		EndNode(false);
	}
	
	EndNode(false);
}

function DecodeEquipmentInventory(name) {
	StartNode(name + " Items");

	for (i = 1; i != 0; i++) {
	    slot = AddUShort("Position");
			
		if (slot == 0) {
			break;
		}

		StartNode("Item at Slot " + slot);

		DecodeItem();

		EndNode(false);
	}
	
	EndNode(false);
}

function DecodeInventory(name) {
	StartNode(name + " Items");

	for ( i = 1; i != 0; i++) {
		slot = AddByte("Position");
			
		if (slot == 0)
			break;

		StartNode("Item at Slot " + slot);

		DecodeItem();

		EndNode(false);
	}

	EndNode(false);
}

function DecodeItem() {
	using (ScriptAPI) {
		type = AddByte("Type");
		item = AddInt("Item ID");
		iscash = AddByte("HasCashid");
		if (iscash == 0x01) {
			AddLong("CashID");
		}
		
		AddLong("Expiration Time");
		AddInt("-1 ?");
		if (type == 0x01) {
			StartNode("Flags part 1");
	           flag = AddInt("Status Flags v.132");
			inputflag = flag;
			flag = ReadIfFlaggedByte(flag, 0x01, "Slots");
			flag = ReadIfFlaggedByte(flag, 0x02, "Scrolls");

			flag = ReadIfFlaggedShort(flag, 0x04, "Str");
			flag = ReadIfFlaggedShort(flag, 0x08, "Dex");
			flag = ReadIfFlaggedShort(flag, 0x10, "Int");
			flag = ReadIfFlaggedShort(flag, 0x20, "Luk");
			flag = ReadIfFlaggedShort(flag, 0x40, "HP");
			flag = ReadIfFlaggedShort(flag, 0x80, "MP");
			flag = ReadIfFlaggedShort(flag, 0x100, "WATK");
			flag = ReadIfFlaggedShort(flag, 0x200, "MATK");
			flag = ReadIfFlaggedShort(flag, 0x400, "WDEF");
			flag = ReadIfFlaggedShort(flag, 0x800, "MDEF");
			flag = ReadIfFlaggedShort(flag, 0x1000, "ACC");
			flag = ReadIfFlaggedShort(flag, 0x2000, "Avo");
			flag = ReadIfFlaggedShort(flag, 0x4000, "Hands");
			flag = ReadIfFlaggedShort(flag, 0x8000, "Speed");
			flag = ReadIfFlaggedShort(flag, 0x10000, "Jump");
			flag = ReadIfFlaggedShort(flag, 0x20000, "Flags");

			flag = ReadIfFlaggedByte(flag, 0x40000, "Increased Skill");

			flag = ReadIfFlaggedByte(flag, 0x80000, "Item Level");
			flag = ReadIfFlaggedLong(flag, 0x100000, "Item EXP");

			flag = ReadIfFlaggedInt(flag, 0x200000, "unk1112");

			flag = ReadIfFlaggedInt(flag, 0x400000, "Hammertiem");

			flag = ReadIfFlaggedShort(flag, 0x800000, "PVP Damage");
			flag = ReadIfFlaggedByte(flag, 0x1000000, "unk118");
			flag = ReadIfFlaggedShort(flag, 0x2000000, "unk119");
			flag = ReadIfFlaggedInt(flag, 0x4000000, "unk1176");

			flag = ReadIfFlaggedByte(flag, 0x8000000, "unk115");
			flag = ReadIfFlaggedByte(flag, 0x10000000, "unk114");
			flag = ReadIfFlaggedByte(flag, 0x20000000, "unk113");
			flag = ReadIfFlaggedByte(flag, 0x40000000, "unk11");
			flag = ReadIfFlaggedByte(flag, 0x80000000, "unk12");
			if (flag != 0) {
				AddComment("FLAG NOT EMTPY: " + flag);
			}
			EndNode(true);
			
			StartNode("Flags part 2");
	            flag = AddInt("Status Flags v.132");
			flag = ReadIfFlaggedByte(flag, 0x01, "??? 1");
			flag = ReadIfFlaggedByte(flag, 0x02, "??? 2");
			flag = ReadIfFlaggedByte(flag, 0x04, "??? 3");
			flag = ReadIfFlaggedLong(flag, 0x08, "??? 4");
			flag = ReadIfFlaggedInt(flag, 0x10, "??? 5");
	    	if (flag != 0) {
				AddComment("FLAG NOT EMTPY: " + flag);
			}
			EndNode(true);
			
			AddString("Name tag");
			
		    AddByte("Status Flag");
			AddByte("Amount of stars");
			
            AddShort("Potential1");
            AddShort("Potential2");
            AddShort("Potential3");
            AddShort("Bonus Potential4");
            AddShort("Bonus Potential5");
			AddShort("Bonus Potential6");
			
			AddShort("Anvilled item ID + (itemid - (itemid % 10000))");
			
			AddShort("Socket state?");
			
			AddShort("Nebulite item ID + 3060000");
			
			AddShort("Neb 2?");
            AddShort("Neb 3?");
			
			if (iscash == 0x00)
    			AddLong("?x8"); // Unique ID?
			AddLong("v126");
			
			AddInt("?x4");
			AddLong("v142");
			AddLong("v142");
			
			AddInt("v142 1");
			
			AddInt("v142 2 1");
			AddInt("v142 2 2");
			AddInt("v142 2 3");
			AddField("Unknown", 6);
		}
	    else if (type == 0x02) {
			AddShort("Amount");
			AddString("Name");
			AddShort("Flags");
			item = item / 10000;
			if (item == 233 || item == 207 || item == 287)    
    			AddLong("?");

		}
	    else if (type == 0x03) {
			AddPaddedString("Petname", 13);
			AddByte("Level");
			AddShort("Closeness");
			AddByte("Fullness");
			AddLong("Time");
			AddShort("New!?");
			AddShort("New!?");
			AddInt("New!?");
			AddShort("New!?");
			AddByte("-.-");
			AddInt("New!?!?!?!");
			AddInt("New!?!?!!?");
			AddShort("Moar new wtf man");
		}
	}
}

function ReadIfFlaggedByte(value, flag, text) {
	if ((value & flag) == flag) {
        AddByte(text + " - " + flag);
		AddComment("Left over flags: " + (value - flag));
		return value - flag;
	}
    return value;
}

function ReadIfFlaggedShort(value, flag, text) {
	if ((value & flag) == flag) {
		AddShort(text + " - " + flag);
		AddComment("Left over flags: " + (value - flag));
		return value - flag;
	}
    return value;
}

function ReadIfFlaggedInt(value, flag, text) {
	if ((value & flag) == flag) {
		AddInt(text + " - " + flag);
		AddComment("Left over flags: " + (value - flag));
		return value - flag;
	}
    return value;
}

function ReadIfFlaggedLong(value, flag, text) {
	if ((value & flag) == flag) {
		AddLong(text + " - " + flag);
		AddComment("Left over flags: " + (value - flag));
		return value - flag;
	}
    return value;
}