
const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendees, setAttendees] = useState(1);
  const [dietary, setDietary] = useState('');
  const [additionalGuests, setAdditionalGuests] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      name,
      email,
      attendees,
      dietary,
      additionalGuests
    });
  };

  return (
    <div className="form-wrap">
      <h2>Event RSVP Form</h2>
      <p>Please complete the form below</p>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Number of Attendees:
          <input
            type="number"
            min="1"
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
            required
          />
        </label>

        <label>
          Dietary Preferences:
          <input
            type="text"
            value={dietary}
            onChange={(e) => setDietary(e.target.value)}
          />
        </label>

        <label>
          Bringing Additional Guests?
          <input
            type="checkbox"
            checked={additionalGuests}
            onChange={(e) =>
              setAdditionalGuests(e.target.checked)
            }
          />
        </label>

        <button type="submit">
          Submit RSVP
        </button>
      </form>

      {submittedData && (
        <div className="confirmation">
          <h3>RSVP Submitted!</h3>

          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>
            Number of attendees: {submittedData.attendees}
          </p>
          <p>
            Dietary preferences: {submittedData.dietary || 'None'}
          </p>
          <p>
            Bringing additional guests:{' '}
            {submittedData.additionalGuests ? 'Yes' : 'No'}
          </p>
        </div>
      )}
    </div>
  );
}
