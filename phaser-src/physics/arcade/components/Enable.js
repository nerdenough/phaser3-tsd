/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * [description]
 *
 * @name Phaser.Physics.Arcade.Components.Enable
 * @since 3.0.0
 */
var Enable = {

    /**
     * [description]
     *
     * @method Phaser.Physics.Arcade.Components.Enable#enableBody
     * @since 3.0.0
     *
     * @param {any} reset - [description]
     * @param {any} x - [description]
     * @param {any} y - [description]
     * @param {any} enableGameObject - [description]
     * @param {any} showGameObject - [description]
     *
     * @return {any} [description]
     */
    enableBody: function (reset, x, y, enableGameObject, showGameObject)
    {
        this.body.enable = true;

        if (reset)
        {
            this.body.reset(x, y);
        }

        if (enableGameObject)
        {
            this.body.gameObject.active = true;
        }

        if (showGameObject)
        {
            this.body.gameObject.visible = true;
        }

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Arcade.Components.Enable#disableBody
     * @since 3.0.0
     *
     * @param {any} disableGameObject - [description]
     * @param {any} hideGameObject - [description]
     *
     * @return {any} [description]
     */
    disableBody: function (disableGameObject, hideGameObject)
    {
        if (disableGameObject === undefined) { disableGameObject = false; }
        if (hideGameObject === undefined) { hideGameObject = false; }

        this.body.stop();

        this.body.enable = false;

        if (disableGameObject)
        {
            this.body.gameObject.active = false;
        }

        if (hideGameObject)
        {
            this.body.gameObject.visible = false;
        }

        return this;
    }

};

module.exports = Enable;
