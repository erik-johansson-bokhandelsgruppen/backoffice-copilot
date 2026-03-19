import { FormEvent, useState } from "react";

type SearchPanelProps = {
  onSearch: (orderId: string) => void;
  loading: boolean;
};

function SearchPanel({ onSearch, loading }: Readonly<SearchPanelProps>) {
  const [orderId, setOrderId] = useState("");
  const [inputError, setInputError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedOrderId = orderId.trim();

    if (!trimmedOrderId) {
      setInputError("Ange ett ordernummer");
      return;
    }

    setInputError("");
    onSearch(trimmedOrderId);
  };

  return (
    <section className="card search-panel" aria-label="Sök order">
      <form
        className="form-row form-row--bottom"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="input-group">
          <label htmlFor="order-id">Ordernummer</label>
          <input
            id="order-id"
            className="input"
            type="text"
            value={orderId}
            onChange={(event) => {
              setOrderId(event.target.value);
              if (inputError) {
                setInputError("");
              }
            }}
            placeholder="Exempel: A6688"
            disabled={loading}
          />
          {inputError ? <p className="inline-error">{inputError}</p> : null}
        </div>
        <div>
          <button className="button" type="submit" disabled={loading}>
            {loading ? "Analyserar..." : "Analysera order"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchPanel;
