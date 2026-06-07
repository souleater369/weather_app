Weather Dashboard

A real-time weather application built with:

- HTML
- CSS
- JavaScript
- Fetch API
- Async/Await
- OpenWeatherMap API

Features

- Search weather by city
- Live temperature
- Humidity data
- Wind speed
- Error handling



### Architecture Pipeline
```mermaid
graph TD
    A[100: Ingest Source Code & Root Key] --> B[102: Parse to Abstract Syntax Tree]
    B --> C[104: Execute Safety Scan]
    C --> D{106: Entropy >= Minimum?}
    D -- No --> E[108: Inject Opaque Predicates]
    E --> F
    D -- Yes --> F[110: Cryptographic Salting & Hashing]
    F --> G[112: Structural Transposition]
    G --> H[114: Re-serialize AST]
    H --> I[116: Output Watermarked Code]
