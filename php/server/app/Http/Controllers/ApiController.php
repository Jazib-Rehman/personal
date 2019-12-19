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
        return Product::create([
            'name' => $request->name,
            'cat_id' => $request->cat_id,
            'description' => $request->description,
            'nutrition' => $request->nutrition,
            'price' => $request->price,
            'image' => $request->image
        ]);
    }

    public function addBasics(Request $request)
    {
        return Basics::create([
            'logo' => $request->logo,
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
        return Category::create([
            'name' => $request->name,
            'image' => $request->image
        ]);
    }

    public function addPdf(Request $request)
    {
        return Pdf::create([
            'name' => $request->name,
            'image' => $request->image
        ]);
    }

    public function addBanner(Request $request)
    {
        return Banner::create([
            'name' => $request->name,
            'image' => $request->image
        ]);
    }

    public function addLocator(Request $request)
    {
        return Locator::create([
            'name' => $request->name,
            'image' => $request->image,
            'map' => $request->map
        ]);
    }

    public function addChannel(Request $request)
    {
        return Channel::create([
            'name' => $request->name,
            'link' => $request->link,
            'image' => $request->image
        ]);
    }
    
    
    //Update
    public function updateProduct(Request $request)
    {
        $product = Product::findOrFail($request->id);
        $product->update($request->all());

        return $product;
    }

    public function updatePdf(Request $request)
    {
        $pdf = Pdf::findOrFail($request->id);
        $pdf->update($request->all());

        return $pdf;
    }

    public function updateBasics(Request $request)
    {
        $basics = Basics::findOrFail($request->id);
        $basics->update($request->all());

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
        Banner::find($request->id)->delete();
        return 204;
    }

    public function deleteChannel(Request $request)
    {
        Channel::find($request->id)->delete();
        return 204;
    }

    public function deleteLocator(Request $request)
    {
        Locator::find($request->id)->delete();
        return 204;
    }


}
