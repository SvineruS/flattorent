import sys
from PIL import Image
from pathlib import Path


path = Path(__file__).parent



width = 512
ratio_height = width / 16 * 9


def thumb(path):
    img = Image.open(path / '1.jpg')
    img.thumbnail((width, width))

    new_width, height = img.size
    offset = (height - ratio_height) / 2
    resize = (0, offset, min(width, new_width), height - offset)
    img = img.crop(resize)

    img.save(str(path / 'thumb.jpg'))
    

def all_():
    dirs = [d
        for d in path.iterdir()
        if d.is_dir() and (d / '1.jpg').is_file()
    ]


    for i, p in enumerate(dirs):
        thumb(p)
        print(p, f'\t\t {i+1}/{len(dirs)} done')


if __name__ == '__main__':
    if sys.argv[1:]:
        thumb(path / sys.argv[1])
    else:
        all_()
