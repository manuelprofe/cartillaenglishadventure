# English Land Analytics Event Contract

Este contrato define los eventos que el sitio enviara al Google Sheet cuando conectemos el endpoint de Apps Script.

## Endpoint

Cuando el Apps Script se despliegue como Web App, el sitio enviara `POST` con JSON al URL publicado.

URL configurada actualmente:

```text
https://script.google.com/macros/s/AKfycbw700QpXr4Z1UnPxSlEXMRyZgShsKcAjj2F0WzXqGZWiP9TOgTJtHUmQlAtUZuuc4ibEw/exec
```

```json
{
  "event_id": "uuid-opcional",
  "timestamp": "2026-05-14T10:30:00.000Z",
  "session_id": "session-abc",
  "user_role": "student",
  "student_id": "",
  "group_id": "3A",
  "level": "N1",
  "activity_id": "ACT-N1-001",
  "activity_name": "Picture Bingo",
  "activity_type": "bingo",
  "resource_type": "internal_game",
  "resource_label": "Word Bingo Quest",
  "action": "answer_submitted",
  "question_id": "bingo-pencil",
  "prompt": "pencil",
  "answer": "pencil",
  "expected_answer": "pencil",
  "is_correct": true,
  "score": 1,
  "stars": 10,
  "duration_sec": 12,
  "device": "desktop",
  "user_agent": "browser",
  "source_page": "juego",
  "notes": ""
}
```

## Eventos principales

- `answer_submitted`: respuesta del estudiante, con `is_correct`, `score`, `stars` y `duration_sec`.
- `resource_opened`: apertura de YouTube, Kahoot, Wordwall o recurso interno.
- `download_clicked`: descarga del paquete de archivos.
- `card_printed`: impresion de cartones de Bingo.
- `card_downloaded`: descarga de cartones de Bingo HTML.
- `game_started`: inicio de juego o actividad.
- `game_completed`: cierre o finalizacion de actividad.

## Tipos de recurso

- `downloadable_files`
- `youtube`
- `kahoot`
- `wordwall`
- `internal_game`
- `none`

## Niveles

- `N1`
- `N2`
- `N3`
- `N4`
- `ALL`
