from PIL import Image, ImageOps
import os
import PIL
import glob
size = (600, 600)
images = [file for file in os.listdir() if file.endswith(('jpeg', 'png', 'jpg','JPG'))]
for image in images:
    img = Image.open(image)
    width, height = img.size
    img.thumbnail((600,600))

    #img = ImageOps.fit(img, size, Image.ANTIALIAS)
    img.save("resized/"+image, optimize=True, quality=40)



# size = (width, 600)    
# img = ImageOps.fit(img, size, Image.ANTIALIAS)