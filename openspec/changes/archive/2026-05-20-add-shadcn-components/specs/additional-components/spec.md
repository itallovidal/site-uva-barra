## ADDED Requirements

### Requirement: Badge component shall be available
The Badge component SHALL be importable from `@/components/lib/badge` and support variant styles (default, secondary, destructive, outline).

#### Scenario: Badge renders with default variant
- **WHEN** `<Badge>Label</Badge>` is rendered
- **THEN** the badge displays with default styling

#### Scenario: Badge renders with destructive variant
- **WHEN** `<Badge variant="destructive">Error</Badge>` is rendered
- **THEN** the badge displays with destructive (red) styling

### Requirement: Card component shall be available
The Card component SHALL be importable from `@/components/lib/card` and provide sub-components: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction.

#### Scenario: Card renders with header and content
- **WHEN** a Card with CardHeader, CardTitle, and CardContent is rendered
- **THEN** the card displays with proper layout and spacing

### Requirement: Checkbox component shall be available
The Checkbox component SHALL be importable from `@/components/lib/checkbox` and support checked/unchecked states with accessibility attributes.

#### Scenario: Checkbox toggles state
- **WHEN** user clicks an unchecked Checkbox
- **THEN** the checkbox becomes checked and `onCheckedChange` fires

### Requirement: Dialog component shall be available
The Dialog component SHALL be importable from `@/components/lib/dialog` and provide sub-components: Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose, DialogOverlay, DialogPortal.

#### Scenario: Dialog opens and closes
- **WHEN** user clicks a DialogTrigger
- **THEN** the dialog opens with overlay and close button
- **WHEN** user clicks the close button or overlay
- **THEN** the dialog closes

### Requirement: DropdownMenu component shall be available
The DropdownMenu component SHALL be importable from `@/components/lib/dropdown-menu` and provide sub-components for items, groups, labels, separators, checkboxes, radio groups, and sub-menus.

#### Scenario: DropdownMenu opens on trigger click
- **WHEN** user clicks a DropdownMenuTrigger
- **THEN** the menu opens with available items

### Requirement: Input component shall be available
The Input component SHALL be importable from `@/components/lib/input` and support standard HTML input attributes with shadcn/ui styling.

#### Scenario: Input renders with error state
- **WHEN** `<input>` has `aria-invalid="true"`
- **THEN** the input displays with destructive border styling

### Requirement: Pagination component shall be available
The Pagination component SHALL be importable from `@/components/lib/pagination` and provide sub-components: Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis.

#### Scenario: Pagination renders with page links
- **WHEN** PaginationContent with multiple PaginationItems is rendered
- **THEN** the pagination displays with proper navigation links

### Requirement: Separator component shall be available
The Separator component SHALL be importable from `@/components/lib/separator` and support horizontal and vertical orientations.

#### Scenario: Separator renders horizontally
- **WHEN** `<Separator />` is rendered without orientation prop
- **THEN** a horizontal line separator is displayed

### Requirement: Skeleton component shall be available
The Skeleton component SHALL be importable from `@/components/lib/skeleton` and provide a loading placeholder with animation.

#### Scenario: Skeleton displays loading animation
- **WHEN** `<Skeleton className="h-4 w-[200px]" />` is rendered
- **THEN** a pulsing gray placeholder is displayed

### Requirement: Tooltip component shall be available
The Tooltip component SHALL be importable from `@/components/lib/tooltip` and provide sub-components: Tooltip, TooltipTrigger, TooltipContent, TooltipProvider.

#### Scenario: Tooltip shows on hover
- **WHEN** user hovers over a TooltipTrigger wrapped in TooltipProvider
- **THEN** the TooltipContent appears after a short delay
