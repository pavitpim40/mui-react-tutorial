
`npm install @mui/material @emotion/react @emotion/styled`
`npm install @material-ui/icons`

- วางพวกนี้ใน index.html

```html
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
```

```js
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

        <Button
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          variant="contained"
          color="secondary"
          size="large"
          style={{ fontSize: 20 }}
        >
          Hello World
        </Button>

```

```js

  <ButtonGroup variant="contained">
          <Button startIcon={<SaveIcon />}>save</Button>
          <Button startIcon={<DeleteIcon />} color="error">
            discard
          </Button>
        </ButtonGroup>

```