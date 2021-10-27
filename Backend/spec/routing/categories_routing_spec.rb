require "rails_helper"

RSpec.describe CategoriesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/api/v1/categories").to route_to("api/v1/categories#index")
    end

    it "routes to #show" do
      expect(get: "/api/v1/categories/1").to route_to("api/v1/categories#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/api/v1/categories").to route_to("api/v1/categories#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/api/v1/categories/1").to route_to("api/v1/categories#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/api/v1/categories/1").to route_to("api/v1/categories#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/api/v1/categories/1").to route_to("api/v1/categories#destroy", id: "1")
    end
  end
end
