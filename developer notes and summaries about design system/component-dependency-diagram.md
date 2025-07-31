# Component Dependency Diagram

```mermaid
graph TD
    subgraph "Packages"
        workspace_pkg["@wheel/workspace"]
        patterns_pkg["@wheel/patterns"]
        ui_pkg["@wheel/ui"]
        layouts_pkg["@wheel/layouts"]
        themes_pkg["@wheel/themes"]
        shared_pkg["@wheel/shared"]
    end

    workspace_pkg --> patterns_pkg
    workspace_pkg --> ui_pkg
    workspace_pkg --> themes_pkg
    workspace_pkg --> shared_pkg

    patterns_pkg --> ui_pkg
    patterns_pkg --> shared_pkg

    layouts_pkg --> ui_pkg
    layouts_pkg --> themes_pkg
    layouts_pkg --> shared_pkg
    
    ui_pkg --> themes_pkg
    ui_pkg --> shared_pkg

    themes_pkg --> shared_pkg
