import ast
import random
import sys
import time

REMINDER_INTERVAL = 8


JOKES = [
    "Why was the mathematician sad? Because someone stole his numbers",
    "I'm not lazy, I'm just a little slow at calculating 2 + 2 in turbo mode",
    "Physics is like love: everything depends on momentum and the force of the moment",
    "My favorite hobby? Making gravity jokes — they always fall flat",
    "If life gives you problems, follow the formula: breathe, think, solve",
    "Math and I have a good relationship: it always gives me more meaning",
]

LEARNING_TIPS = [
    "Quick lesson: speed = distance / time, so the units here are meters per second",
    "Quick lesson: Newton's second law is F = m × a",
    "Quick lesson: kinetic energy is KE = ½ × mass × velocity²",
    "Quick lesson: an average is the sum of the numbers divided by how many numbers there are",
    "Quick lesson: when you divide both sides of an equation, never divide by zero",
]


def show_waiting_reminder():
    print(f"\n{random.choice(JOKES)}")
    print(random.choice(LEARNING_TIPS))


def timed_input(prompt):
    """Read a line while sharing a joke and a short lesson every few seconds!"""
    if sys.platform == "win32":
        import msvcrt

        print(prompt, end="", flush=True)
        answer = []
        next_reminder = time.monotonic() + REMINDER_INTERVAL

        while True:
            if msvcrt.kbhit():
                character = msvcrt.getwch()
                if character in {"\r", "\n"}:
                    print()
                    return "".join(answer)
                if character == "\003":
                    raise KeyboardInterrupt
                if character in {"\b", "\x7f"}:
                    if answer:
                        answer.pop()
                        print("\b \b", end="", flush=True)
                elif character in {"\x00", "\xe0"}:
                    msvcrt.getwch()
                else:
                    answer.append(character)
                    print(character, end="", flush=True)
            elif time.monotonic() >= next_reminder:
                show_waiting_reminder()
                print(prompt + "".join(answer), end="", flush=True)
                next_reminder = time.monotonic() + REMINDER_INTERVAL
            else:
                time.sleep(0.05)

    import select

    print(prompt, end="", flush=True)
    next_reminder = time.monotonic() + REMINDER_INTERVAL
    while True:
        remaining = max(0, next_reminder - time.monotonic())
        ready, _, _ = select.select([sys.stdin], [], [], remaining)
        if ready:
            return sys.stdin.readline().rstrip("\r\n")
        show_waiting_reminder()
        print(prompt, end="", flush=True)
        next_reminder = time.monotonic() + REMINDER_INTERVAL


def safe_eval_expression(expression):
    """Safely evaluates simple numeric expressions"""
    try:
        parsed = ast.parse(expression, mode="eval")
    except SyntaxError as exc:
        raise ValueError(
            "Invalid expression, use numbers and operators like +, -, *, /, **"
        ) from exc

    def _eval(node):
        if isinstance(node, ast.Constant):
            if isinstance(node.value, (int, float)):
                return node.value
            raise ValueError("Use only numbers")
        if isinstance(node, ast.BinOp):
            left = _eval(node.left)
            right = _eval(node.right)
            if isinstance(node.op, ast.Add):
                return left + right
            if isinstance(node.op, ast.Sub):
                return left - right
            if isinstance(node.op, ast.Mult):
                return left * right
            if isinstance(node.op, ast.Div):
                if right == 0:
                    raise ZeroDivisionError("You cannot divide by zero")
                return left / right
            if isinstance(node.op, ast.Pow):
                return left**right
            if isinstance(node.op, ast.Mod):
                if right == 0:
                    raise ZeroDivisionError("You cannot calculate modulo by zero")
                return left % right
            raise ValueError("Unsupported operator")
        if isinstance(node, ast.UnaryOp):
            operand = _eval(node.operand)
            if isinstance(node.op, ast.UAdd):
                return +operand
            if isinstance(node.op, ast.USub):
                return -operand
            raise ValueError("Unsupported unary operator")
        raise ValueError("Invalid expression")

    return _eval(parsed.body)


def ask_for_float(prompt):
    while True:
        try:
            value = float(timed_input(prompt))
            return value
        except ValueError:
            print("That is not a valid number, try again")


def calculate_average():
    print("Type the numbers separated by spaces, for example: 7 8 9 10")
    raw = timed_input("Numbers: ").strip()
    numbers = raw.split()
    try:
        values = [float(n) for n in numbers]
    except ValueError:
        print("Please use only numbers separated by spaces")
        return
    average = sum(values) / len(values)
    print(f"The average is: {average:.2f}")


def calculate_speed():
    distance = ask_for_float("Distance (m): ")
    time = ask_for_float("Time (s): ")
    if time == 0:
        print("Time cannot be zero")
        return
    velocity = distance / time
    print(f"Velocity = {velocity:.2f} m/s")


def calculate_force():
    mass = ask_for_float("Mass (kg): ")
    acceleration = ask_for_float("Acceleration (m/s²): ")
    force = mass * acceleration
    print(f"Force = {force:.2f} N")


def calculate_kinetic_energy():
    mass = ask_for_float("Mass (kg): ")
    velocity = ask_for_float("Velocity (m/s): ")
    energy = 0.5 * mass * (velocity**2)
    print(f"Kinetic energy = {energy:.2f} J")


def calculate_weight():
    mass = ask_for_float("Mass (kg): ")
    gravity = 9.8
    weight = mass * gravity
    print(f"Weight = {weight:.2f} N")


def handle_math_query(query):
    query = query.strip().lower()

    if query in {"joke", "jokes"}:
        print(random.choice(JOKES))
        return

    if "average" in query or "mean" in query:
        calculate_average()
        return

    if "speed" in query or "velocity" in query:
        calculate_speed()
        return

    if "force" in query:
        calculate_force()
        return

    if "energy" in query or "kinetic" in query:
        calculate_kinetic_energy()
        return

    if "weight" in query:
        calculate_weight()
        return

    if query.startswith("calculate "):
        expression = query.replace("calculate ", "", 1)
    elif query.startswith("solve "):
        expression = query.replace("solve ", "", 1)
    else:
        expression = query

    try:
        result = safe_eval_expression(expression)
        print(f"Result: {result}")
    except (ValueError, ZeroDivisionError, SyntaxError) as exc:
        print(f"I could not interpret that {exc}")
        print("Examples: 2 + 2, 10 / 5, 3 ** 3, 8 * 7")


def show_help():
    print("\nCommands I understand:")
    print("- 'joke' -> tell a joke")
    print("- 'calculate 5 * 8' -> solve a math expression")
    print("- 'average' -> calculate the mean of several numbers")
    print("- 'speed' -> calculate v = d / t")
    print("- 'force' -> calculate F = m * a")
    print("- 'energy' -> calculate kinetic energy")
    print("- 'weight' -> calculate weight")
    print("- 'exit' -> end the chat\n")


def get_name():
    while True:
        name = input("What is your name? ").strip()

        if not name:
            print("I need a name to get this party started")
            continue

        confirmation = input(f"So your name is {name}? Type yes or no ").strip().lower()

        if confirmation in {"yes", "y", "yeah", "yep", "sure"}:
            return name

        if confirmation in {"no", "n", "nope", "not really"}:
            print("No worries, let's fix that")
            continue

        print("Please answer yes or no")


def main():
    print("Hello, friend")
    name = get_name()
    print(f"Nice to meet you, {name}")
    print("I am your calculator buddy with a weird sense of humor")
    print(random.choice(JOKES))

    while True:
        user_input = input("\nYou: ").strip()

        if not user_input:
            print(random.choice(JOKES))
            continue

        if user_input.lower() in {"exit", "bye", "goodbye", "see you", "tchau"}:
            print(f"See you later, {name}")
            break

        if user_input.lower() in {"help", "commands"}:
            show_help()
            continue

        if user_input.lower() in {"joke", "jokes"}:
            print(random.choice(JOKES))
            continue

        print("Let me think for a second")
        handle_math_query(user_input)


if __name__ == "__main__":
    main()
