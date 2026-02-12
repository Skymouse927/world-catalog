// EntryViewer.tsx
// Presentational component: shows active entry content + navigation buttons.
// No state, no filtering, no business logic.

import type { Entry } from "../../types/models";

type EntryViewerProps = {
  // currently selected entry (null when subcategory has no entries)
  activeEntry: Entry | null;

  // navigation position display (ex: "1 / 3")
  positionText: string;

  // button click handlers (controlled by parent)
  onPrev: () => void;
  onNext: () => void;

  // button disable flags (controlled by parent)
  disablePrev: boolean;
  disableNext: boolean;
};

export function EntryViewer({
  activeEntry,
  positionText,
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}: EntryViewerProps) {
  // Keep buttons "normal" even if global CSS tries to stretch flex items
  const navButtonStyle: React.CSSProperties = {
    padding: "8px 12px",
    border: "1px solid #444",
    background: "transparent",
    color: "inherit",
    borderRadius: "6px",
    cursor: "pointer",
    width: "auto",
    height: "auto",
    alignSelf: "center",
  };

  const navButtonDisabledStyle: React.CSSProperties = {
    opacity: 0.5,
    cursor: "not-allowed",
  };

  return (
    // Wrapper ensures the nav row sits *below* the image+description row
    <div style={{ width: "100%" }}>
      {/* Image + description row (matches original AppShell layout) */}
      <div style={{ display: "flex", gap: "24px", marginTop: "16px" }}>
        {/* Image panel for active entry */}
        <div
          style={{
            width: "320px",
            height: "320px",
            border: "1px solid #444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden", // prevents image overflow
          }}
        >
          {activeEntry ? (
            <img
              src={activeEntry.imageUrl}
              alt={activeEntry.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            "No entries"
          )}
        </div>

        {/* Description panel for active entry */}
        <div
          style={{
            flex: 1,
            minHeight: "320px",
            border: "1px solid #444",
            padding: "16px",
          }}
        >
          {/* Title area (replaces the old "Description" heading) */}
          <h3 style={{ marginTop: 0 }}>
            {activeEntry ? activeEntry.name : "No entries"}
          </h3>

          {activeEntry ? (
            <>
              {/* Entry description (preserve newlines) */}
              <p style={{ whiteSpace: "pre-line" }}>{activeEntry.description}</p>

              {/* Position indicator within filtered list */}
              <p style={{ opacity: 0.8 }}>{positionText}</p>
            </>
          ) : (
            <p>No entries in this subcategory yet.</p>
          )}
        </div>
      </div>

      {/* Navigation controls for entry browsing (bottom row, like original) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
          alignItems: "center", // prevents vertical stretch
        }}
      >
        <button
          onClick={onPrev}
          disabled={disablePrev}
          style={{
            ...navButtonStyle,
            ...(disablePrev ? navButtonDisabledStyle : null),
          }}
        >
          {"< Back"}
        </button>

        <button
          onClick={onNext}
          disabled={disableNext}
          style={{
            ...navButtonStyle,
            ...(disableNext ? navButtonDisabledStyle : null),
          }}
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
}
