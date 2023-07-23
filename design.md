- character
  -constructor() 
  - type -> ['witcher', 'wizard', 'witch', 'robot', 'astromorph']
  - vitals:
    - HP : HP is 0? isDead = true
    - Mana : Mana =0? no spell
    - Stamina: stamina = 0? no run!
   
    - injuries(
        bleed,
        burn,
        disease,
        faint,
        return false
      )

  - getLevel -> add level modifier to character traits
  - initial level: 1 - (
    - HP: +4
    - Mana: +3 
    - Stamina: +5
    - Attack: +2
  )

  - interactive:
    - attack(character)
      (
        rand(roll d8) + attack modifier -> rand(max(8+2))
        d8+2 -> injury based on weapon type -> injure(character)
      )
    - injure(character)
   
  



  ->Test: creates a character of type [], with level = 1, !injuries
