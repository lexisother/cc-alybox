// Sets the name of the player entity to the name of the new model. For use
// with the `player.entity.name` variable and other circumstances.
ig.ENTITY.Player.inject({
  initModel() {
    this.parent();
    this.name = sc.model.player.config.name;
  },
});
