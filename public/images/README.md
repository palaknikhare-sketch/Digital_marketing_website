# Product Images

Upload your image files into this directory. The app references them via paths like `/images/filename.jpg`.

## Naming Convention

### Product gallery images
```
{productId}-{color}-{view}.jpg
```
- **productId**: `metro`, `campus`, `tech`, `urban`, `explorer`, `studio`, `flex`, `pro`, `executive`, `graphite`, `commute`, `atlas`, `vesta`, `ledger`, `drift`
- **color**: `midnight`, `charcoal`, `sand`, `olive`, `navy`, `cream`, `burgundy`, `taupe`, `stone`, `brown`
- **view**: `front`, `side`, `back`, `inside`, `lifestyle`, `detail`

Example: `metro-midnight-front.jpg`, `metro-midnight-side.jpg`, `metro-midnight-back.jpg`, etc.

### Featured images (used on cards and shop listings)
Each product's `featuredImage` is set to `{productId}-{defaultColor}-front.jpg`.

### Hero and lifestyle images
- `hero.jpg` — main hero image on the home page
- `lifestyle-campus.jpg` — campus lifestyle scene
- `lifestyle-study.jpg` — work/study lifestyle scene
- `lifestyle-commute.jpg` — commute lifestyle scene
- `lifestyle-coding.jpg` — late-night coding lifestyle scene
- `flat-lay.jpg` — flat lay of items that fit inside a backpack
- `open-bag.jpg` — open backpack showing compartments

## Editing image paths
All paths are defined in `src/data/products.ts`. Update them there if you use different filenames.
