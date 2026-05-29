## MODIFIED Requirements

### Requirement: Placeholder pages for admin sub-sections

All admin sub-section pages SHALL display a placeholder message indicating they are not yet implemented.

- The following routes SHALL display a centered "ainda em construção" message with a construction icon:
  - `/admin/collaborators/register`
  - `/admin/collaborators/requests`
  - `/admin/collaborators`
  - `/admin/articles/create`
  - `/admin/articles/approve`
  - `/admin/newsletter/create`
  - `/admin/newsletter`
- The placeholder message SHALL be visually clear and use the site's styling patterns

#### Scenario: Placeholder pages show under construction message
- **WHEN** user navigates to any admin sub-section
- **THEN** they see a centered "ainda em construção" message
