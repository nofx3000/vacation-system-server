import MenuService from "../service/MenuService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
class MenuController {
  static MenuController: MenuController = new MenuController();
  async getMenuList() {
    const menuList = await MenuService.findMenus();
    if (menuList) {
      return new SuccessModel(menuList);
    } else {
      return new ErrorModel("not found");
    }
  }
}

export default MenuController.MenuController;
