full_dot = '●'
empty_dot = '○'


def create_character(name, strength, intelligence, charisma):
    if not isinstance(name, str):
        return "The character name should be a string"

    if name == "":
        return "The character should have a name"

    if len(name) > 10:
        return "The character name is too long"

    if " " in name:
        return "The character name should not contain spaces"

    stats = [strength, intelligence, charisma]

    if any(type(stat) is not int for stat in stats):
        return "All stats should be integers"

    if any(stat < 1 for stat in stats):
        return "All stats should be no less than 1"

    if any(stat > 4 for stat in stats):
        return "All stats should be no more than 4"

    if sum(stats) != 7:
        return "The character should start with 7 points"

    def format_stat(value):
        return "●" * value + "○" * (10 - value)

    return (
        f"{name}\n"
        f"STR {format_stat(strength)}\n"
        f"INT {format_stat(intelligence)}\n"
        f"CHA {format_stat(charisma)}"
    )
