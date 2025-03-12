# drop-down-example

## How to drop down
### html
```html
<div class="drop-down">
  <button class="drop-down-label">Actions</button>
  <div class="drop-down-content hidden">
    <button class="drop-down-item">Add</button>
    <button class="drop-down-item">Edit</button>
    <button class="drop-down-item">Delete</button>
  </div>
</div>
```

### css
```css
.drop-down {
  position: relative;
}

.drop-down-label {
  display: block;
}

.drop-down-content.hidden {
  transform: scaleY(0);
}

.drop-down-content {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  transform: scaleY(1);
  transform-origin: top;
}
```

### javascript
```javascript
const dropDowns = document.querySelectorAll(".drop-down");

dropDowns.forEach((dropDown) => {
  const label = dropDown.querySelector(".drop-down-label");
  const content = dropDown.querySelector(".drop-down-content");

  label.addEventListener("click", () => {
    content.classList.toggle("hidden");
  });

  dropDown.addEventListener("focusout", (event) => {
    if (!dropDown.contains(event.relatedTarget)) {
      content.classList.add("hidden");
    }
  });
});
```
