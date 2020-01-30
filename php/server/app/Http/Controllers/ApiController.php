<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
Use App\AboutUs;
Use App\Banner;
Use App\Basics;
Use App\Category;
Use App\Channel;
Use App\Contact;
Use App\Locator;
Use App\Pdf;
Use App\Product;
Use App\Tags;

class ApiController extends Controller
{
    
    //Add
    public function addProduct(Request $request)
    {
        $localhost = config('app.localhost');
        if ($request->hasFile('image')) {
            $imageName = $localhost . 'uploads/products/' . time() . '.' . $request->image->getClientOriginalExtension();
            $imagURL = $request->image->move(public_path('uploads/products'), $imageName);
        }
        return Product::create([
            'name' => $request->name,
            'cat_id' => $request->cat_id,
            'description' => $request->description,
            'nutrition' => $request->nutrition,
            'price' => $request->price,
            'image' => $imageName
        ]);
    }

    public function addBasics(Request $request)
    {
        $localhost = config('app.localhost');
        if ($request->hasFile('image')) {
            $imageName = $localhost . 'uploads/site_headers/' . time() . '.logo.' . $request->image->getClientOriginalExtension();
            $imagURL = $request->image->move(public_path('uploads/site_headers'), $imageName);
        }
        if ($request->hasFile('steckers')) {
            $steckersName = $localhost . 'uploads/site_headers/' . time() . '.stickers.' . $request->steckers->getClientOriginalExtension();
            $imagURL = $request->steckers->move(public_path('uploads/site_headers'), $steckersName);
        }
        if ($request->hasFile('homeImage')) {
            $homeImageName = $localhost . 'uploads/site_headers/' . time() . '.home.' . $request->homeImage->getClientOriginalExtension();
            $imagURL = $request->homeImage->move(public_path('uploads/site_headers'), $homeImageName);
        }
        if ($request->hasFile('findUsImage')) {
            $findUsImageName = $localhost . 'uploads/site_headers/' . time() . '.findus.' . $request->findUsImage->getClientOriginalExtension();
            $imagURL = $request->findUsImage->move(public_path('uploads/site_headers'), $findUsImageName);
        }
        if ($request->hasFile('contactUsImage')) {
            $contactUsImageName = $localhost . 'uploads/site_headers/' . time() . '.contactus.' . $request->contactUsImage->getClientOriginalExtension();
            $imagURL = $request->contactUsImage->move(public_path('uploads/site_headers'), $contactUsImageName);
        }
        if ($request->hasFile('ourFoodImage')) {
            $ourFoodImageName = $localhost . 'uploads/site_headers/' . time() . '.ourfood.' . $request->ourFoodImage->getClientOriginalExtension();
            $imagURL = $request->ourFoodImage->move(public_path('uploads/site_headers'), $ourFoodImageName);
        }

        return Basics::create([
            'logo' => $imageName,
            'steckers' => $steckersName,
            'homeImage' => $homeImageName,
            'findUsImage' => $findUsImageName,
            'contactUsImage' => $contactUsImageName,
            'ourFoodImage' => $ourFoodImageName,
            'site_header' => $request->site_header,
            'categories' => $request->categories,
            'channels' => $request->channels,
            'locators' => $request->locators,
            'facebook' => $request->facebook,
            'twitter' => $request->twitter,
            'instagram' => $request->instagram,
            'youtube' => $request->youtube
        ]);
    }

    public function addFeedback(Request $request)
    {
        return Contact::create([
            'f_name' => $request->f_name,
            'l_name' => $request->l_name,
            'email' => $request->email,
            'message' => $request->message
        ]);
    }

    public function addTag(Request $request)
    {
        return Tags::create([
            'name' => $request->name,
            'pro_id' => $request->pro_id
        ]);
    }

    public function addAbout(Request $request)
    {
        return AboutUs::create([
            'title' => $request->title,
            'description' => $request->description,
            'phone' => $request->phone,
            'email' => $request->email,
            'address' => $request->address
        ]);
    }

    public function addCategory(Request $request)
    {
        $localhost = config('app.localhost');
        if ($request->hasFile('image')) {
            $imageName = $localhost . 'uploads/categories/' . time() . '.' . $request->image->getClientOriginalExtension();
            $imagURL = $request->image->move(public_path('uploads/categories'), $imageName);
        }
        return Category::create([
            'name' => $request->name,
            'image' => $imageName
        ]);
    }

    public function addPdf(Request $request)
    {
        $localhost = config('app.localhost');
        if ($request->hasFile('image')) {
            $imageName = $localhost . 'uploads/site_headers/' . time() . '.' . $request->image->getClientOriginalExtension();
            $imagURL = $request->image->move(public_path('uploads/site_headers'), $imageName);
        }
        return Pdf::create([
            'name' => $request->name,
            'image' => $imageName
        ]);
    }

    public function addBanner(Request $request)
    {
        $localhost = config('app.localhost');
        if ($request->hasFile('image')) {
            $imageName = $localhost . 'uploads/banners/' . time() . '.' . $request->image->getClientOriginalExtension();
            $imagURL = $request->image->move(public_path('uploads/banners'), $imageName);
        }
        return Banner::create([
            'name' => $request->name,
            'image' => $imageName
        ]);
    }

    public function addLocator(Request $request)
    {
        $localhost = config('app.localhost');
        if ($request->hasFile('image')) {
            $imageName = $localhost . 'uploads/locators/' . time() . '.' . $request->image->getClientOriginalExtension();
            $imagURL = $request->image->move(public_path('uploads/locators'), $imageName);
        }
        return Locator::create([
            'name' => $request->name,
            'image' => $imageName,
            'map' => $request->map
        ]);
    }

    public function addChannel(Request $request)
    {
        $localhost = config('app.localhost');
        if ($request->hasFile('image')) {
            $imageName = $localhost . 'uploads/channels/' . time() . '.' . $request->image->getClientOriginalExtension();
            $imagURL = $request->image->move(public_path('uploads/channels'), $imageName);
        }
        return Channel::create([
            'name' => $request->name,
            'link' => $request->link,
            'image' => $imageName
        ]);
    }
    
    
    //Update
    public function updateProduct(Request $request)
    {
        //Delete current image
        $localhost = config('app.localhost');
        $link = $request->img;
        $image = explode($localhost, $link);
        $image = $image[1];
        unlink($image);
        
        //Upload new image
        if ($request->hasFile('image')) {
            $imageName = $localhost . 'uploads/products/' . time() . '.' . $request->image->getClientOriginalExtension();
            $imagURL = $request->image->move(public_path('uploads/products'), $imageName);
        }
        //Update product in Mysql
        $product = Product::findOrFail($request->id);
        $product->update([
            'name' => $request->name,
            'cat_id' => $request->cat_id,
            'description' => $request->description,
            'nutrition' => $request->nutrition,
            'price' => $request->price,
            'image' => $imageName
        ]);

        return $product;
    }

    public function updatePdf(Request $request)
    {
        
        //Delete current image
        $localhost = config('app.localhost');
        $link = $request->img;
        $image = explode($localhost, $link);
        $image = $image[1];
        unlink($image);
        
        // Upload new image
        if ($request->hasFile('image')) {
            $imageName = $localhost . 'uploads/site_headers/' . time() . '.' . $request->image->getClientOriginalExtension();
            $imagURL = $request->image->move(public_path('uploads/site_headers'), $imageName);
        }
        // Update product in Mysql
        $pdf = Pdf::findOrFail($request->id);
        $pdf->update([
            'name' => $request->name,
            'image' => $imageName
        ]);

        return $pdf;
    }

    public function updateBasics(Request $request)
    {
        //Delete current logo
        $localhost = config('app.localhost');
        $link = $request->logo;
        $image = explode($localhost, $link);
        $image = $image[1];
        unlink($image);

        //Upload new logo
        if ($request->hasFile('image')) {
            $imageName = $localhost . 'uploads/site_headers/' . time() . '.' . $request->image->getClientOriginalExtension();
            $imagURL = $request->image->move(public_path('uploads/site_headers'), $imageName);
        }

        //Update basics in Mysql
        $basics = Basics::findOrFail($request->id);
        $basics->update([
            'logo' => $imageName,
            'site_header' => $request->site_header,
            'categories' => $request->categories,
            'channels' => $request->channels,
            'locators' => $request->locators,
            'facebook' => $request->facebook,
            'twitter' => $request->twitter,
            'instagram' => $request->instagram,
            'youtube' => $request->youtube
        ]);

        return $basics;
    }

    public function updateAbout(Request $request)
    {
        $about = AboutUs::findOrFail($request->id);
        $about->update($request->all());

        return $about;
    }
    
    
    //Delete
    public function deleteProduct(Request $request)
    {
        $localhost = config('app.localhost');
        $link = $request->image;
        $image = explode($localhost, $link);
        $image = $image[1];
        unlink($image);
        
        Product::find($request->id)->delete();
        return 204;
    }

    public function deleteTag(Request $request)
    {
        Tags::find($request->id)->delete();
        return 204;
    }

    public function deleteCategory(Request $request)
    {
        $localhost = config('app.localhost');
        $link = $request->image;
        $image = explode($localhost, $link);
        $image = $image[1];
        unlink($image);

        Category::find($request->id)->delete();
        return 204;
    }

    public function deleteFeedback(Request $request)
    {
        Contact::find($request->id)->delete();
        return 204;
    }

    public function deleteBanner(Request $request)
    {
        $localhost = config('app.localhost');
        $link = $request->image;
        $image = explode($localhost, $link);
        $image = $image[1];
        unlink($image);

        Banner::find($request->id)->delete();
        return 204;
    }

    public function deleteChannel(Request $request)
    {
        $localhost = config('app.localhost');
        $link = $request->image;
        $image = explode($localhost, $link);
        $image = $image[1];
        unlink($image);

        Channel::find($request->id)->delete();
        return 204;
    }

    public function deleteLocator(Request $request)
    {
        Locator::find($request->id)->delete();
        return 204;
    }


}
