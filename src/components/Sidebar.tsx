// src/components/MySidebar.tsx
import React, { useState } from "react";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarContent
} from "@/components/ui/sidebar"; // Adjust the import path if necessary
import { Button } from "@/components/ui/button"; // Assuming this exists

const MySidebar = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Antioxidants", checked: true },
    { id: 2, name: "Herbs & homeopathy", checked: true },
    { id: 3, name: "Minerals", checked: true },
    { id: 4, name: "Multivitamins", checked: true },
    { id: 5, name: "Vitamins A-Z", checked: true }
  ]);
  const [selectAll, setSelectAll] = useState(true);

  // Toggle select all
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = e.target.checked;
    setSelectAll(newCheckedState);
    const updatedCategories = categories.map((category) => ({
      ...category,
      checked: newCheckedState
    }));
    setCategories(updatedCategories);
  };

  // Handle individual checkbox change
  const handleCheckboxChange = (id: number) => {
    const updatedCategories = categories.map((category) =>
      category.id === id ? { ...category, checked: !category.checked } : category
    );
    setCategories(updatedCategories);
  };

  return (
    <SidebarProvider>
      <div className="flex">
        {/* Sidebar component */}
        <Sidebar side="left" collapsible="offcanvas" variant="sidebar">
          <SidebarContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-700 font-semibold">Subcategory</h3>
              <div className="flex items-center">
                <label className="mr-2 text-gray-600">Select All</label>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* Checkbox list */}
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.id} className="mb-2">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={category.checked}
                      onChange={() => handleCheckboxChange(category.id)}
                      className="cursor-pointer"
                    />
                    <span className="text-gray-600">{category.name}</span>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            {/* Apply button */}
            <Button className="w-full mt-4 bg-blue-500 text-white">
              Apply
            </Button>
          </SidebarContent>
        </Sidebar>

        {/* Main content */}
        <main className="flex-1 p-4">
          <SidebarTrigger />
          <h1>My Store</h1>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MySidebar;
