from PIL import Image
from pathlib import Path


path = Path(__file__).parent


dirs = [
    d
    for d in path.iterdir()
    if d.is_dir() and (d / '1.jpg').is_file()
]


width = 512
ratio_height = width / 16 * 9


for i, path in enumerate(dirs):
    img = Image.open(path / '1.jpg')
    img.thumbnail((width, width))

    height = img.size[1]
    offset = (height - ratio_height) / 2
    resize = (0, offset, width, height - offset)
    img = img.crop(resize)

    img.save(str(path / 'thumb.jpg'))
    print(path, f'\t\t {i+1}/{len(dirs)} done')


