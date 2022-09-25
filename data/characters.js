const characters = {
    naruto: {
        name: "Naruto",
        health: 120,
        chakra: 500,
        chakraMoldPerTurn: 250,
        eyes: false,
        jutsus: {
            jutsu1: "rasengan",
            jutsu2: "rasenshuriken",
            jutsu3: "narutoUzumakiBarrage",
            powerup1: "kcm2sage",
            powerup2: "so6p",
            finalAttack: "ShadowCloneBaitAndRasenganBaitAndUltraBigBallRasenshuriken"
        }
   },
   sasuke: {
       name: "Sasuke",
       health: 105,
       chakra: 440,
       chakraMoldPerTurn: 230,
       eyes: {
           eye1: "sasukeRightEMS",
           eye2: "sasukeLeft6TomoeRinnegan",
       },
       jutsus: {
           jutsu1: "chidori",
           jutsu2: "ameterasu",
           jutsu3: "chibakuTensei",
           powerup1: "perfectSusanno",
           powerup2: "indraSusanoo",
           finalAttack: "amenotejikaraAndDevaPathAndIndraArrow"
       }
   },
   sakura: {
        name: "Sakura",
        health: 140,
        chakra: 360,
        chakraMoldPerTurn: 180,
        eyes: false,
        jutsus: {
            jutsu1: "50HealthForTeamMember1",
            jutsu2: "100HealthForSakura",
            jutsu3: "chakraPunch",
            powerup1: "100Healings",
            powerup2: "reviveDeadTeamMember",
            finalAttack: "sakuraMegaChakraPunch"
            }
        },
        kakashi: {
            name: "Kakashi",
            health: 100,
            chakra: 380,
            chakraMoldPerTurn: 200,
            eyes: {
                eye1: "obitoRightMS",
                eye2: "obitoLeftMS"
            },
            jutsus: {
                jutsu1: "chidori",
                jutsu2: "raikiri",
                jutsu3: "kamuiShuriken",
                powerup1: "susanoo",
                powerup2: "obitoKamuiTechnique",
                finalAttack: "kamuiRaikiri"
            }
        },
        hinata: {
            name: "Hinata",
            health: 90,
            chakra: 370,
            chakraMoldPerTurn: 190,
            eyes: {
                eye1: "hinataRightByakugan",
                eye2: "hinataLeftByakugan"
            },
            jutsus: {
                jutsu1: "gentleFist",
                jutsu2: "8TrigramsPalmsVacuumPalm",
                jutsu3: "8TrigramsPalmsRevolvingHeaven",
                powerup1: "gentleStepTwinLionFists",
                powerup2: "8Trigrrams64Palms",
                finalAttack: "8TrigramsTwinLionsCrumblingAttack"
            }
        },
        neji: {
            name: "Neji",
            health: 95,
            chakra: 370,
            chakraMoldPerTurn: 185,
            eyes: {
                eye1: "nejiRightByakugan",
                eye2: "nejiLeftByakugan"
            },
            jutsus: {
                jutsu1: "gentleFist",
                jutsu2: "",
                jutsu3: "8TrigramsPalmsRevolvingHeaven",
                powerup1: "8Trigrrams64Palms",
                powerup: "8Trigrrams128Palms",
                finalAttack: "DodgeAttacks"
            }
        }

}

export { characters };