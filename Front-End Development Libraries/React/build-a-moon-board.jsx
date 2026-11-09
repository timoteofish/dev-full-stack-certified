export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>

      <div className="mood-board">
        <MoodBoardItem
          color="#E8F5E9"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" // That's image can to be visible in freecodecamp.org
          description="Beautiful Nature Pathway"
        />

        <MoodBoardItem
          color="#E3F2FD"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" // That's image can to be visible in freecodecamp.org
          description="Peaceful Ocean Shore"
        />

        <MoodBoardItem
          color="#FFF3E0"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg" // That's image can to be visible in freecodecamp.org
          description="Explore Santorini"
        />
      </div>
    </div>
  );
}
