## ADDED Requirements

### Requirement: System uses React Router Links for internal navigation
The system SHALL use `Link` components from React Router DOM for all internal navigation purposes.

#### Scenario: Internal page navigation
- **WHEN** user needs to navigate to another page on the same site
- **THEN** the `Link` component from React Router is used instead of `<a>` tag

#### Scenario: External link navigation
- **WHEN** link href starts with `http` or `https`
- **THEN** developer may use `<a>` tag for external navigation
- **WHEN** link has `target="_blank"` attribute
- **THEN** developer may use `<a>` tag for external navigation

#### Scenario: Link without external indicator
- **WHEN** link uses `<a>` tag without `http` prefix and without `target="_blank"`
- **THEN** developer SHALL use `Link` component instead
- **THEN** link must use only `route` prop (no `to` prop)

#### Scenario: Link rendering
- **WHEN** `Link` is rendered with `route` prop
- **THEN** link is rendered using default `a` tag with `className="text-sm font-medium text-slate-600 hover:text-slate-800 underline-offset-2 transition-colors"`
- **THEN** link does not have underline by default
- **THEN** link font-size is smaller than body text