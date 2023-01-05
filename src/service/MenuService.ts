import seq from "../db/seq";
class MenuService {
  static MenuService: MenuService = new MenuService();
  private Menu = seq.models.Menu;
  async findMenus() {
    return this.Menu.findAll({
      attributes: ["id", "label", "path", "icon", "type", "children"],
    });
  }
}

export default MenuService.MenuService;
